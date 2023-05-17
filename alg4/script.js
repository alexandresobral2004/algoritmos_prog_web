



const consultar = () => {
  let valor1 = document.getElementById('l1').value
  console.log(valor1)
  let result = document.getElementById('resultado')

  switch (parseInt(valor1)) {
    case 1:
      result.innerHTML = `Hoje é Domingo`
      break;
    case 2:
      result.innerHTML = `Hoje é Segunda`
      break;
    case 3:
      result.innerHTML = `Hoje é Terça-feira`
      break;
    case 4:
      result.innerHTML = `Hoje é Quarta-feira`
      break;
    case 5:
      result.innerHTML = `Hoje é Quinta-feira`
      break;
    case 6:
      result.innerHTML = `Hoje é Sexta-feira`
      break;
    case 7:
      result.innerHTML = `Hoje é Sábado`
      break;

    default:
      result.innerHTML = `Dia não encontrado`
      break;
  }


  // result.innerHTML = `Resultado: ${parseFloat(valor1) + parseFloat(valor2)}`
}
