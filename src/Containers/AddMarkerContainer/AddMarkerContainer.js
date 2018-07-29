import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import AddMarkerForm from '../../Components/AddMarkerForm/AddMarkerForm'
import { post } from '../../Services/api'

class AddMarkerContainer extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  handleLogonFormSubmit = async e => {
    e.preventDefault()
    const body = {
      username: 'gcgp88',
      password: 'asdf1234'
    }
    try {
      const res = await post(`${process.env.REACT_APP_ENDPOINT_URL}/auth`, body)
      if (res && res.status === 200) {
        this.setState({
          isAuthenticated: true
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { isAuthenticated } = this.state
    return isAuthenticated ? (
      <AddMarkerForm />
    ) : (
      <LoginForm handleSubmit={this.handleLogonFormSubmit} />
    )
  }
}

export default AddMarkerContainer
