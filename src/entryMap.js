import React, { Component } from 'react'
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps'
import { default as _ } from 'lodash'
import $ from 'jquery'
import Transition from './TransitionContainer'

class EntryMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: '',
      lng: '',
      title: '',
      info: '',
      username: '',
      password: '',
      markers: [],
      csrf: '',
      authenticated: true,
      loading: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    if (!this.state.authenticated) {
      this.getCSRF()
    } else {
      this.logMapPoint(this.state.csrf)
    }
  }

  getCSRF = () => {
    let authentication = {
      username: this.state.username,
      password: this.state.password
    }
    return $.ajax({
      url: 'http://www.ggalliani.com/projects/llm/auth/api.php',
      method: 'POST',
      data: authentication,
      success: (csrf) => {
        this.setState({
          csrf: csrf
        })
        return this.submitCSRF(csrf)
      },
      error: () => {
        window.alert('Sorry, there appears to be an error connecting with the server. :(')
        this.setState({ loading: false })
      }
    })
  }

  submitCSRF = (csrf) => {
    return $.ajax({
      url: `http://www.ggalliani.com/projects/llm/auth/api.php/map?csrf=${csrf}`,
      method: 'GET',
      success: () => {
        return this.setState({
          authenticated: true,
          loading: false
        })
      },
      error: () => {
        window.alert('Sorry, your login details were incorrect.')
        this.setState({
          loading: false
        })
      }
    })
  }

  logMapPoint = (auth) => {
    let data = {
      xCord: this.state.lat,
      yCord: this.state.lng,
      key: 'London',
      defaultAnimation: 2,
      title: this.state.title,
      info: this.state.info
    }

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    return fetch('http://localhost:8888/locations', {
      body: JSON.stringify(data),
      method: 'POST',
      headers
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          loading: false,
          lat: '',
          lng: '',
          title: '',
          info: ''
        })
        document.getElementsByClassName('submission-form')[0].reset()
        this.props.toggleSuccess()
      })
      .catch((err) => {
        console.error(this.props.url, status, err.toString())
        window.alert('Sorry, there was an error. :( \n Please try again.)')
        this.setState({
          loading: false
        })
      })
  }

  handleMapClick = (e) => {
    let marker = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    let markerArray = [marker]
    this.setState({
      ...marker,
      markers: markerArray
    })
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { markers } = this.state
    return (
      <Transition>
        <GoogleMapLoader
          query={{ libraries: 'geometry,drawing,places,visualization,search' }}
          {...this.props}
          containerElement={
            <div
              style={{
                height: `300px`,
                width: `100%`
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 51.511507, lng: -0.115705 }}
              onClick={this.handleMapClick}
            >
              {markers.map((marker, index) => {
                const ref = index
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: marker.lat,
                      lng: marker.lng
                    }}
                  >
                    {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                  </Marker>
                )
              })}
            </GoogleMap>
          }
        />
        <form className="submission-form" onSubmit={this.handleSubmit}>
          {this.state.authenticated && (
            <Transition>
              <div className="container">
                <div className="coords">
                  {this.state.lat}&nbsp;{this.state.lng}
                </div>
                <input type="hidden" className="lat" value={this.state.lat} />
                <input type="hidden" className="lng" value={this.state.lng} />
                <input
                  type="text"
                  name="title"
                  placeholder="Location Name"
                  onChange={this.handleChange}
                  className="title"
                  value={this.state.title}
                  disabled={this.state.loading}
                />
                <textarea
                  value={this.state.desc}
                  placeholder="Enter a description..."
                  name="info"
                  onChange={this.handleChange}
                  disabled={this.state.loading}
                />
                <input
                  type="submit"
                  className="submit"
                  value={this.state.loading ? 'Adding...' : 'Add Location'}
                  disabled={this.state.loading}
                />
              </div>
            </Transition>
          )}
          {!this.state.authenticated && (
            <Transition>
              <div className="container">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                  disabled={this.state.loading}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  disabled={this.state.loading}
                />
                <input
                  type="submit"
                  className="submit"
                  value={this.state.loading ? 'Authenticating...' : 'Log In'}
                  disabled={this.state.loading}
                />
              </div>
            </Transition>
          )}
          {this.state.loading && (
            <div className="loading-graphic">
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube" />
                <div className="sk-cube2 sk-cube" />
                <div className="sk-cube4 sk-cube" />
                <div className="sk-cube3 sk-cube" />
              </div>
            </div>
          )}
        </form>
      </Transition>
    )
  }
}

export default EntryMap
