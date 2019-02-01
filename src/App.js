import React, { Component } from 'react';
// import Child from './Child';
import IncompleteToDoList from './IncompleteToDoList';
import CompleteToDoList from './CompleteToDoList';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from './index'; 

// add redux to this project so that the array of todos are in the redux store and not in the state of this App component
// connect the IncompleteTodoList and CompleteTodoList to the redux store to display the appropriate todos

class App extends Component {
  state = {
    newTodo: '',
  }

  handleClick = () => {
    const{ newTodo } = this.state
    this.props.addTodo({id: this.props.todos.length + 1, name: newTodo, completed: false}) 
    this.setState({  //setState forces rerender 
          
      newTodo: '' //newTodo slice of state
    })
  }

  handleChange = event => {
    this.setState({newTodo: event.target.value})
  }

  updateTodo = (id) => {
    // todos: [
    //   {id: 1, name: 'Call Mom', completed: false},
    //   {id: 2, name: 'Complete Project', completed: true},
    //   {id: 3, name: 'Meet with Ed Coach', completed: false},
    // ]

    // Filter todos for the one matching the ID and all the rest
    const clickedTodo = this.props.todos.find(todo => todo.id === id)
    this.props.updateTodo(clickedTodo)

    // Given the object that represents the todo that's been clicked, invert its completed property value
    // Set state to a new array with the other objects followed by the single one that's been modified
  }

  render() {
    console.log(this.props)
    // will be an array of all the completed todos
    //const completedTodos 
    const completeToDoList = this.props.todos.filter(todo => todo.completed)
    console.log(completeToDoList)

    // will be an array of all the incomplete todos
    //const incompleteTodos
    const inCompleteToDoList = this.props.todos.filter(todo => !todo.completed)
    console.log(inCompleteToDoList) 
    
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.newTodo} type="text" />
        <button onClick={this.handleClick}>Create Todo</button>
        <p>Not Done</p>
        <IncompleteToDoList change={this.updateTodo} 
           />
        <p>Done</p>
        <CompleteToDoList change={this.updateTodo}  />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state }
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodo: (todo) => dispatch(addTodo(todo)), 
    updateTodo: (todo) => dispatch(updateTodo(todo))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// // 1. Add two more buttons to the Child component that will update the name and name2 properties in App.js
// // 2. Pass two new methods to the Child component to update those names separately   
// // 3. Add a listener to the button so that when clicked, a new todo object is created and added to the state

// // 4. Display complete and incomplete todos separately 
// // 5. When a checkbox is clicked on a todo, it changes the completed value to the opposite of what it was




// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRout: sr, Link, Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import Child1 from './Child1';
// import Child2 from './Child2';
// import Child3 from './Child3';
// import Child4 from './Child4';
// import NotFound from './NotFound';

// class App extends Component {
//   render() {
//     return(
//       <BrowserRouter>
//         <div className="App">
//           <Link to='/'>Home</Link>
//           <Link to='/Child1/3'>Child1</Link>
//           <Link to='/Child2?arg1=15&arg2=16'>Child2</Link>
//           <Link to='/Child3'>Child3</Link>
//           <Link to='/Child4'>Child4</Link>
//           <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route exact path='/Child2' component={Child2}/>
//             <Route exact path='/Child1/:number' component={Child1}/>
//             <Route exact path='/Child3' component={Child3}/>
//             <Route exact path='/Child4' component={Child4}/>
//             <Route component={NotFound}/>
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// export default App;


