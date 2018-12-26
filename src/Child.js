import React from 'react'

class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>The name is {this.props.something}</h1>
        <h1>The second name is {this.props.name2}</h1>
        <h1>The count is {this.props.count}</h1>
        <button onClick={this.props.whatever}>Change the count</button>
      </div>
    )
  }
}

export default Child
