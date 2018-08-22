import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import AddMarkerForm from '../../Components/AddMarkerForm/AddMarkerForm'
import { post } from '../../Services/api'

class AddMarkerContainer extends Component {
  constructor() {
    super()
    const isAuthenticated = document.cookie.includes('connect.sid')
    this.state = {
      isAuthenticated,
      xCord: '',
      yCord: '',
      title: '',
      info: '',
      username: '',
      password: '',
      error: null
    }
  }

  handleChange = e => {
    const {
      target: { name, value }
    } = e
    this.setState({
      [name]: value
    })
  }

  handleLogonFormSubmit = async e => {
    e.preventDefault()
    const { username, password } = this.state
    const body = {
      username,
      password
    }
    try {
      const res = await post(
        `${process.env.REACT_APP_ENDPOINT_URL}/auth`,
        body,
        {
          credentials: 'include'
        }
      )
      if (res && res.authenticated) {
        this.setState({
          isAuthenticated: true,
          error: null
        })
      } else {
        alert(res.message)
        this.setState({
          error: res.message
        })
      }
    } catch (error) {
      const { message } = error
      this.setState({
        error: message
      })
    }
  }

  handleMapClick = e => {
    const { lat, lng } = e
    this.setState({
      xCord: lat,
      yCord: lng
    })
  }

  handleMarkerSubmit = e => {
    e.preventDefault()
    const { xCord, yCord, title, info } = this.state
    const body = {
      xCord,
      yCord,
      title,
      info
    }
    if (xCord && yCord && title && body) {
      return post(`${process.env.REACT_APP_ENDPOINT_URL}/locations`, body, {
        credentials: 'include'
      }).then(res => {
        if (res.index) {
          res.msg && alert(res.msg)
          this.setState({
            xCord: '',
            yCord: '',
            title: '',
            info: ''
          })
        }
      })
    }
    return alert('Missing informatino')
  }

  render() {
    const { isAuthenticated, xCord, yCord, title, info } = this.state
    return isAuthenticated ? (
      <AddMarkerForm
        xCord={xCord}
        yCord={yCord}
        title={title}
        info={info}
        handleChange={this.handleChange}
        handleMapClick={this.handleMapClick}
        handleSubmit={this.handleMarkerSubmit}
      />
    ) : (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleLogonFormSubmit}
      />
    )
  }
}

export default AddMarkerContainer
