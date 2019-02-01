import React from 'react';
import { connect } from 'react-redux';

class IncompleteToDoList extends React.Component {
  render() {
    // sort the todos that are passed to this component according to their priority
    // items.sort(function (a, b) {
    //   return a.value - b.value;
    // });
    // we use slice to make a copy of this.props.todos because sort mutates the original array
    const sortedTodos = this.props.whatever.slice().sort((a, b) => {

      return b.priority - a.priority 
    })
    console.log(sortedTodos);

    return (
      <div>
        <h1>
          {/* map over the sorted list you created above */}
          {sortedTodos.map(todo => {
            return <p key={todo.name}>
            <input type='checkbox' onChange={() => this.props.change(todo.id)} />
            {todo.name} - {todo.priority}
            </p>
          
          })}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // filter all of the todos in state that are not complete, and make that equal to the todos property below
  const filteredIncompleteTodos = state.filter(todo => !todo.completed)
  console.log(filteredIncompleteTodos) 
  return {whatever: filteredIncompleteTodos}
}

export default connect(mapStateToProps)(IncompleteToDoList);


// const sortedTodos = this.props.todos.priority.sort((a, b) => {

//   return b.todos.priority - a.todos.priority 
// })
// console.log(sortedTodos);


// // sort by value


// // sort by name
// items.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });