const notes = getsavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
  const id = uuidv4()
  notes.push({
    id: id,
    title: '',
    body: ''
  })
  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function() {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter_by').addEventListener('change', function(e) {
  console.log(e.target.value)
})

// --Single --
// p
// #replace
// .item

// --Multiple--
// p#order
// button.inventory
// h1#title.application
// h1.application#title

// // // DOM - Document Object Model

// // // Query and remove
// // const p = document.querySelector('p')
// // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '*****'
//     //   console.log(p.textContent)
// //   p.remove()
// })

// // Add a new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector9('body').appendChild(newParagraph)

// const user = {
//   name: 'Andrew',
//   age: 27
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

// localStorage.setItem('location', 'Philadelphia')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()