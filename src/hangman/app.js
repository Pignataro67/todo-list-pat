// HTTP (Hypertext transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

let puzzleEl = document.querySelector('#puzzle')
let guessesEl = document.querySelector('#guesses')
let game1 = new Hangman('hang', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
  let guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.StatusMessage
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

// Primitive value: non-object-- strinng, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// let product = 'Computer'
// console.log(product)

// let otherProduct = new String('Phone')
// console.log(otherProduct)

// const product1 = new Object({
//   name: 'The War of Art'
// })

// product.name = 'Rest'

// Object.prototype.someNewMethod = () => 'This is the new Function.'

// // hasOwnProperty

// console.log(product1.someNewMethod('hasOwnProperty'))
// console.log(product)