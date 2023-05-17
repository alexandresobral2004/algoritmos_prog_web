

const consultar = () => {
  let valor1 = document.getElementById('l1').value
  console.log(valor1)
  let valor2 = document.getElementById('l2').value
  console.log(valor2)
  let valor3 = document.getElementById('l3').value
  console.log(valor2)
  let result = document.getElementById('resultado')


  if (valor1 === valor2 && valor2 === valor3) {
    result.innerHTML = `Triângulo Equilátero`
  }
  else if (valor1 !== valor2 && valor1 === valor3) {
    result.innerHTML = `Triângulo Isósceles`
  }
  else if (valor1 === valor2 && valor1 !== valor3) {
    result.innerHTML = `Triângulo Isósceles`
  }
  else if (valor1 !== valor2 && valor2 !== valor3) {
    result.innerHTML = `Triângulo Escaleno`
  }


  // result.innerHTML = `Resultado: ${parseFloat(valor1) + parseFloat(valor2)}`
}

