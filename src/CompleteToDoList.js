// import React from 'react';
// import { connect } from 'react-redux';

// class CompleteToDoList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.todos.map(todo => {
//             return <p key={todo.name}>
//             <input type='checkbox' checked onChange={() => this.props.change(todo.id)} />
//             {todo.name}
//             </p>
//           })}
//         </h1>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   const filteredCompleteTodo = state.filter(todo => todo.completed)
//     return {todos: filteredCompleteTodo}
// }

// export default connect(mapStateToProps)(CompleteToDoList);