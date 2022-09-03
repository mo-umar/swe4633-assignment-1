const solve = e => {
  e.preventDefault()
  const firstNumber = Number(document.querySelector('#fnumber').value)
  const secondNumber = Number(document.querySelector('#snumber').value)
  
  document.querySelector('#solution').innerText = firstNumber + secondNumber
}