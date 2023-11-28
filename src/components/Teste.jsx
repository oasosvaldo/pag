import './Teste.css'

const Teste = () => {
  function calcular() {
    let nome = (document.querySelector('.nome').value).toUpperCase()
    let n1 = parseFloat(document.querySelector('.n1').value)
    let n2 = parseFloat(document.querySelector('.n2').value)
    let n3 = parseFloat(document.querySelector('.n3').value)
    let m = (Number(n1 + n2 + n3) / 3).toFixed(2)
    let form = document.querySelector('.form')
    let res = document.querySelector('.res')
    let status = document.querySelector('.status')
    let btnInicio = document.querySelector('.btnInicio')
    if (nome === '' || n1 === '' || n2 === '' || n3 === '') {
      alert('Preencha corretamente todos os campos e tente novamente!')
    } else {
      form.style.display = 'none'
      res.style.padding = '10px'
      res.style.display = 'inline'
      res.innerHTML = `Bem vindo <strong>${nome}</strong><br>Para as notas ${n1}, ${n2} e ${n3} sua media é: ${m}`
      if (m < 7 && m >= 5) {
        status.style.display = 'inline'
        status.style.backgroundColor = 'orange'
        status.innerHTML = 'Aluno em Recuperação!'
        btnInicio.style.display = 'inline'
      } else if (m < 5) {
        status.style.display = 'inline'
        status.style.backgroundColor = 'red'
        status.innerHTML = 'Aluno Reprovado!'
        btnInicio.style.display = 'inline'
      } else if (m >= 7) {
        status.style.display = 'inline'
        status.style.backgroundColor = 'green'
        status.innerHTML = 'Aluno Aprovado!'
        btnInicio.style.display = 'inline'
      }

    }
  }

  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className='form'>
      <h1>Preencha os campos abaixo!</h1>
      <ul>
        <li>
          <label>Digite seu nome:</label><input className="nome" type="text" placeholder="Digite seu nome completo" />
        </li>
        <li>
          <label>Digite a primeira nota:</label><input className="n1" type="text" placeholder="primeira nota" />
        </li>
        <li>
          <label>Digite a segunda nota:</label><input className="n2" type="text" placeholder="segunda nota" />
        </li>
        <li>
          <label>Digite a terceira nota:</label><input className="n3" type="text" placeholder="terceira nota" />
        </li>
        <li>
          <button className='btnCalc' onClick={calcular}>Calcular</button>
        </li>
      </ul>
      <div className='resposta'>
        <div className='res'></div>
        <div className='status'></div>
        <button className='btnInicio' onClick={refreshPage}>Ínicio</button>
      </div>
    </div>
  )
}

export default Teste