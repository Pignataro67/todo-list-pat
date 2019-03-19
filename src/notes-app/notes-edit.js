const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
  location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

wnndow.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === noteId)
    
    if (!note) {
      location.assign('/index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})

// const add2 = function () {
//   return arguments[0] + arguments[1]
// }

// connsole.log(add(11, 22, 33, 44))

// let car = { 
//   color: 'Red',
//   getSummary : function() {
//     return `The car is ${this.color}`
//   }
// }

// console.log(car.getSummmary())

// let myAge = 40
// let message = myAge >= 18 ? 'You can vote!' : 'You cannnot vote.'

// console.log (message)

// let myAge2 = 40
// let showPage = () => {
//   return ('Showing the page')
// }
// let showErrrorPage = () => {
//   return ('Show the error page')
// }

// let message2 = myAge2 >= 21 ? showPage() : showErrrorPage()
// confirm.log(message2)

let team = ['Pat', 'Andrew'] 
let print = team.length <= 4 ? "Team size: 3" : "Too many people on your team"

// Truthy - values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

// let products = []
// let product = products[0]

// if (product) {
//   console.log('Product found')
// } else {
//   console.log('Product not found')
// }

// // Type coercion - a string, a number, a boolean

// console.log('5' + 5)
// console.log('5' - 5)
// console.log('5' === 5)

// let value = true + 12
// let type = typeof 123
// console.log(type)
// console.log(value)

// let getTip = (amount) => {
//   if (typeof amount === 'number') {
//     return amount * .25
//   } else {
//     throw Error ('Argument must be a number')
//   }
// }

// try {
//   let result = getTip(true)
// console.log(result)
//   } catch (e) {
//     console.log('catch block is running')
//   }

// let result = getTip(true)
// console.log(result)

class Person {
  constructor(firstName, lastName, age, likes =[]) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

  this.likes.forEach((like) => {
    bio = bio + `${this.firstName} likes ${like}`
  })
  return bio
  }
  set fullName(fullName) {
    let names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

let me = new Person('Pat', 'P', 40, ['learnig', 'chilling'])

me.getBio = function () {
  return 'This is fake!'
}

class Employee extends Person {
  constructor(firstName, lastName, age, positon, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class.`
  }
  updateGrade(change) {
    this.grade += change
  }
}

const me = new Employee('Andrew', 'Mead', 27, 'Teacher', [])
me.fullName = 'Clancey Turner'
console.log(me.getBio)
me.updateGrade(-20)
console.log(me.getBio())

// me.setName('Xander P')
// console.log(me.getBio())

// let you = new Person('Terri', 'P', 38)
// console.log(you.getBio())





let Hangman = function(word, remainingGuesses, guesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })
  return puzzle
}

let me = new Hangman('hang', 3)
let you = new Hangman('man', 2)

console.log(me, you)

const data = {
  locations: [],
  get location () {
    return this._location
  },
  set location(value) {
    value = value.trim()
    this._location = value.trim()
    this.locations.push(this._location)
  }
}

// code that uses the data object
data.location = '     Philidelphia        '
data.location = ' New York'
console.log(data)