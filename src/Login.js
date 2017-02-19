import React, { Component } from 'react';
import Transition from './TransitionContainer'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: ''
    }
  }
  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
      this.setState({
        [name] : value
      })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.handleLogin(formData)
  }
  render () {
    return (
    <Transition>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        <input type='submit' label='login'/>
      </form>
    </Transition>
    )
  }
}

export default Login