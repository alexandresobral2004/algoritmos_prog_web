

const soma = () => {
  let valor1 = document.getElementById('valor1').value
  console.log(valor1)
  let valor2 = document.getElementById('valor2').value
  console.log(valor2)
  let result = document.getElementById('resultado')
  
  result.innerHTML = `Resultado: ${parseFloat(valor1) + parseFloat(valor2)}`
}

const multiplica = () => {
  let valor1 = document.getElementById('valor1').value
  console.log(valor1)
  let valor2 = document.getElementById('valor2').value
  console.log(valor2)
  let result = document.getElementById('resultado')

  result.innerHTML = `Resultado: ${parseFloat(valor1) * parseFloat(valor2)}`
}

const dividir = () => {
  let valor1 = document.getElementById('valor1').value
  console.log(valor1)
  let valor2 = document.getElementById('valor2').value
  console.log(valor2)
  let result = document.getElementById('resultado')

  result.innerHTML = `Resultado: ${parseFloat(valor1) / parseFloat(valor2)}`
}