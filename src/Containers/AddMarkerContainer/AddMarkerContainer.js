import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

class AddMarkerContainer extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  handleLogonFormSubmit = e => {
    e.preventDefault()
    alert('submitted')
  }

  render() {
    const { isAuthenticated } = this.state
    return isAuthenticated ? (
      <div>I'm authenticated now</div>
    ) : (
      <LoginForm handleSubmit={this.handleLogonFormSubmit} />
    )
  }
}

export default AddMarkerContainer
