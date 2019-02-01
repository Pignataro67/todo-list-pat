import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// add redux to this project so that the array of todos are in the redux store and not in the state of this App component
// connect the IncompleteTodoList and CompleteTodoList to the redux store to display the appropriate todos

  const ADD_TODO = 'ADD_TODO'
  export function addTodo(todo) {
    return { type: ADD_TODO, payload: todo }
  }  

  const UPDATE_TODO = 'UPDATE_TODO'
  export function updateTodo(todo) {
    return { type: UPDATE_TODO, payload: todo }
  }

const originalTodos = [
  {id: 1, name: 'Call Mom', completed: false, priority: 1},
  {id: 2, name: 'Complete Project', completed: true, priority: 3},
  {id: 3, name: 'Meet with Ed Coach', completed: false, priority: 1},
]

function todosReducer(state = originalTodos, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload]
  } else if (action.type === 'UPDATE_TODO') {
    const clickedTodo = state.find(todo => todo.id === action.payload.id)
    const unClickedTodos = state.filter(todo => todo.id !== action.payload.id)

  clickedTodo.completed = !clickedTodo.completed 
  return [...unClickedTodos, clickedTodo]
  } else {
    return state
  }
}

const store = createStore(todosReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
