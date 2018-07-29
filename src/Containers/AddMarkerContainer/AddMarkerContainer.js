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
      info: ''
    }
    this.mapRef=React.createRef()
  }

  componentDidMount() {
    console.log(this.mapRef)
    console.log(this.mapRef.current.firstChild)
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
    const body = {
      username: 'gcgp88',
      password: 'asdf1234'
    }
    try {
      const res = await post(
        `${process.env.REACT_APP_ENDPOINT_URL}/auth`,
        body,
        {
          credentials: 'include'
        }
      )
      if (res && res.status === 200) {
        this.setState({
          isAuthenticated: true
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  handleMapClick = e => {
    const { lat, lng } = e
    this.setState({
      xCord: lat,
      yCord: lng
    })
  }

  handleMarkerSubmit = () => {}

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
        mapRef={this.mapRef}
      />
    ) : (
      <LoginForm handleSubmit={this.handleLogonFormSubmit} />
    )
  }
}

export default AddMarkerContainer
