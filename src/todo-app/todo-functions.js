const getSavedTodos = function() {
  
  const todosJSON = localStorage.getItem('todos')

  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todo to localStorage
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a Todo
const removeTodo = function(id) {
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id === id
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed value for a given todo
const toggleTodo = function(id) {
  const todo = todos.find(function(todo) {
    return todo.id === id
  })
  if (todo !== undefined) {
    todo.completed = !todo.comleted
  }
}
  
// Render application notes
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch 
  })

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach(function(todo) {
    document.querySelector('$todos').appendChild(generateTodoDOM(todo))
  })
}

// Get the Dom elements for an individual todo
const generateTodoDOM = function(todo) {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')
  // const toggleButton = document.createElement('button')

  // Set up todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener('change', function() {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // Set up the todo text
  todoText.textContent = todo.text
  todoEl.appendChild(todoText)
  
  // Set up the remove button
  removeButton.textContent = 'x'
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', function() {
    removeTodo(todo.id)
    renderTodos(todos, filters)
  })
  return todoEl
}

  // Set up the toggle button 
  toggleButton.textContent = 'x'
  todoEl.appendChild(toggleButton)
  // toggleButton.addEventListener('click', function() {
  //   toggleTodo(todo.id)
  //   renderTodos(todos, filters)
  //})
 
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}