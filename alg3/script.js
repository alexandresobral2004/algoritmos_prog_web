

const consultar = () => {
  let valor1 = document.getElementById('l1').value

  let result = document.getElementById('resultado')

  if (valor1 % 3 == 0) {
    result.innerHTML = `O Número ${valor1} é divisível por 3`
  }
  else {
    result.innerHTML = `O Número 3 não é divisível por ${valor1}`
  }



  // result.innerHTML = `Resultado: ${parseFloat(valor1) + parseFloat(valor2)}`
}

