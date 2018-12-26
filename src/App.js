import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Child from './Child'

class App extends Component {
  state = {
    name: 'Cernan Bernardo',
    name2: 'Pat Pignataro',
    count: 100
  }

  changeCount = () => {
    this.setState({
      count: 300
    })
  }

  changeName = () => {
    this.setState({
      name: 'Xander Pignataro'
    })
  }

  changeEverything = () => {
    this.setState({
      name2: 'Kenzie Pignataro'
    })
  }

  render() {
    return (
      <div className="App">
        <Child
          count={this.state.count}
          something={this.state.name}
          name2={this.state.name2}
          whatever={this.changeCount}
        />
      </div>
    )
  }
}

export default App
