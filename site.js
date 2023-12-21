let ProductNameInputElement = document.getElementById('text-input') 
let remainingChar = document.getElementById('remaining-chars')

function UpdateRemainingCharacters(){
   let enteredText = ProductNameInputElement.value
   let enterTextLength= enteredText.length
   let remaining = 25 - enterTextLength 
   remainingChar.textContent = remaining
   
}

ProductNameInputElement.addEventListener('input', UpdateRemainingCharacters)
//  var first = prompt("Enter first number")
//  var second = prompt("Enter second number")
//  var total = Number(first) + Number(second)
//  alert (total)









let firstBtn = document.getElementById("second-btn")
let secondBtn = document.body.children[2]
let paragraph = document.body.children[1].children[0]
let colorBackground = document.body.children[1]
console.log(colorBackground)
function changeText(){
let first = paragraph
first.textContent ="Andrew Tate Loves you"
   console.log(first)
}

function changeBackground(){
 let second = colorBackground
   colorBackground.style.backgroundColor ="rgb(32, 255, 199)"
   console.log(second)
}


firstBtn.addEventListener("click", changeText)
secondBtn.addEventListener("click", changeBackground)
