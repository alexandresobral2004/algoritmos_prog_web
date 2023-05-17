

const consultar = () => {
  let valor1 = parseFloat(document.getElementById('l1').value)
  console.log(valor1)
  let valor2 = parseFloat(document.getElementById('l2').value)
  console.log(valor2)

  let operacao = document.getElementById('l3').value
  console.log(operacao)

  let result = document.getElementById('resultado')

  switch (operacao) {
    case '+':
      result.innerHTML = `O resultado da soma é: ${valor1 + valor2}`
      break;
    case '-':
      result.innerHTML = `O resultado da subtração é: ${valor1 - valor2}`
      break;
    case '*':
      result.innerHTML = `O resultado da multiplicação é:${valor1 * valor2} `
      break;
    case '/':
      result.innerHTML = `O resultado da divisão é: ${valor1 / valor2} `
      break;

    default:
      result.innerHTML = `Erro, dados não calculados`
      break;
  }


  // result.innerHTML = `Resultado: ${ parseFloat(valor1) + parseFloat(valor2) } `
}

