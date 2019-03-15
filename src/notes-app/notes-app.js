let notes = getsavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter_by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
}) 



// const now = moment()
// console.log(now.toString())
// now.add(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moent(nowTimestamp).toString())

// const birthday = moment()
// birthday.year(1978).month(5).day(7)
// console.log(birthday.format('MMM D, YYYY'))

// // Unix Epoch - January 1st 1970 00:00:00

// // Create 2 dates in the past(use string for date)
// // Get timestamps for both
// // Figure out which is first and print its time (use toString)

// const dateOne = new Date('May 19 1980 12:00:00')
// const dateTwo = new Date
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if (dateOneTimestamp < dateTwoTimestamp) {
//   console.log(dateOne.toString())
// } else if (dateTwoTimestamp > dateOneTimestamp) {
//   console.log(dateTwo.toString())
// }

// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

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