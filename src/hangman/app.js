let puzzleEl = document.querySelector('#puzzle')
let guessesEl = document.querySelector('#guesses')
let game1 = new Hangman('hang', 3)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()
console.log(game1.status)

//   let game2 = new Hangman('New Jersey', 2)
//   console.log(game2.getPuzzle())

window.addEventListener('keypress', function (e) {
  let guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent = game1.getStatusMessage()
})

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