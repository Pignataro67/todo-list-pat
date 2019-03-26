class Counter extends React.Cmponent {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0       // 1. setup default state object 2. commp renders and uses values
    };               // 3. Change state based on event buttons and event handlers
  }                  // 4.
    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        }; // return {} state values we want to change and new value we want to assign
      }); // 3. --> current state values 1st arg, prevstate, state {} b4 changes are applied
    }
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
    }
    handleReset() {
      this.setState(() => {
        return { 
          count: 0
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1> // step 2
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  } // Adding this ti see if it shows on github

ReactDOM.render(<Counter />, document.getElementById('app'));

pups.sort(function (a, b) {
  if (a.name < b.name) {
    return -1
  } else if (a.name > b.name) {
    return 1
  } else {
    return 0
  }
});

//*******************************************************
// class VisibilityToggle extends Rewact.Component {
//   constructor(props) {
//     super(props);
//     this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this)
//     this.state = {
//       visibility: false
//     };
//   }
//   handleToggleVisibilty() {
//     this.setState((prevState) => {
//       return {
//         visibility : !prevState.visibility
//       }
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleToggleVisibilty}></button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<VisibilityToggle />, getElementById('app'))

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.hanldeAddOne = this.hanldeAddOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0, STATE IS OBJECT, KEY VALUE PAIRS -->INITIAL DATA RENDERS TO SCREENS --> STATE {} CABE CHANGED BY US, BASED OF EVENT BUTTON CLICK, FORM SUBMISSION, FINISHING OF HTTP REQUEST THAT GOT JSON DATA FROM AN API --> WHEN WE CHANGE STATE APP RERENDERS TO GET U UP TO DATE --> IF STATE DOESNT CHANGE, APP DOESNT RERENDER BUT WILL UPDATE UI WHEN STATE CHANGES
//     }
//   }
  
//   hanldeAddOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevStae.count + 1
//       };
//     });
//   }
//   handleMinusOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1
//       };
//     });
//   }
//   handleReset() {
//     this.setState(() => {
//       return {
//         count: 0
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.hanldeAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }

// class IndecisonApp extends React.Component {
//   render () {
//     const title = 'Indecision';
//     const subTitle = 'Put your life in the hands of a computer';
//     const options = ['Thing one', 'thing two', 'Thing four']

//     return (
//       <div>
//         <Header title={title} subTitle={subTitle} />
//         <Action />
//         <Options options={options} />
//         <AddOption />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   handlePick() {
//     alert('handlePick')
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   }
//   handleRemoveAll() {
//     console.log(this.props.options);
//     // alert('Remove all')
//   }
//   render() {
//     return (
//       <div>                                                        <<-- bind sets own context
//         <button onClick={this.handleRemoveAll}>Remove All</button>  <<-- bind sets own context 
//       {
//         this.props.options.map((option) => <Option key={option} optionText={option}/>)
//       }
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     )
//   }
// }

// class AddOption extends React.Compnent {
//   handleAddOption(e) {
//     e.preventDefault // <<--- default form submit do not want full page refresh

//     const  option = e.target.elements.option.value.trim();

//     if (option) {
//       alert(option);
//     }
//   }
//   render() {
//     return(
//       <div>
//         <h1>
//           <form onSubmit={this.handleAddOption}>
//             <input type="text" name="option"></input>
//             <button>Add Option</button>
//           </form>
//         </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<IndecisonApp />, document.getElementById('app'));

//***********************************************************************
// import React, { Component } from 'react';
// // import Child from './Child';
// import IncompleteToDoList from './IncompleteToDoList';
// import CompleteToDoList from './CompleteToDoList';
// import { connect } from 'react-redux';
// import { addTodo, updateTodo } from './index'; 

// // add redux to this project so that the array of todos are in the redux store and not in the state of this App component
// // connect the IncompleteTodoList and CompleteTodoList to the redux store to display the appropriate todos

// class App extends Component {
//   state = {
//     newTodo: '',
//   }

//   handleClick = () => {
//     const{ newTodo } = this.state
//     this.props.addTodo({id: this.props.todos.length + 1, name: newTodo, completed: false}) 
//     this.setState({  //setState forces rerender 
          
//       newTodo: '' //newTodo slice of state
//     })
//   }

//   handleChange = event => {
//     this.setState({newTodo: event.target.value})
//   }

//   updateTodo = (id) => {
//     // todos: [
//     //   {id: 1, name: 'Call Mom', completed: false},
//     //   {id: 2, name: 'Complete Project', completed: true},
//     //   {id: 3, name: 'Meet with Ed Coach', completed: false},
//     // ]

//     // Filter todos for the one matching the ID and all the rest
//     const clickedTodo = this.props.todos.find(todo => todo.id === id)
//     this.props.updateTodo(clickedTodo)

//     // Given the object that represents the todo that's been clicked, invert its completed property value
//     // Set state to a new array with the other objects followed by the single one that's been modified
//   }

//   render() {
//     console.log(this.props)
//     // will be an array of all the completed todos
//     //const completedTodos 
//     const completeToDoList = this.props.todos.filter(todo => todo.completed)
//     console.log(completeToDoList)

//     // will be an array of all the incomplete todos
//     //const incompleteTodos
//     const inCompleteToDoList = this.props.todos.filter(todo => !todo.completed)
//     console.log(inCompleteToDoList) 
    
//     return (
//       <div className="App">
//         <input onChange={this.handleChange} value={this.state.newTodo} type="text" />
//         <button onClick={this.handleClick}>Create Todo</button>
//         <p>Not Done</p>
//         <IncompleteToDoList change={this.updateTodo} 
//            />
//         <p>Done</p>
//         <CompleteToDoList change={this.updateTodo}  />
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return { todos: state }
// }

// const mapDispatchToProps = dispatch => {
//   return { 
//     addTodo: (todo) => dispatch(addTodo(todo)), 
//     updateTodo: (todo) => dispatch(updateTodo(todo))  
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

// // // 1. Add two more buttons to the Child component that will update the name and name2 properties in App.js
// // // 2. Pass two new methods to the Child component to update those names separately   
// // // 3. Add a listener to the button so that when clicked, a new todo object is created and added to the state

// // // 4. Display complete and incomplete todos separately 
// // // 5. When a checkbox is clicked on a todo, it changes the completed value to the opposite of what it was