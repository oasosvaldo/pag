import React from 'react'
import './Teste.css'

const JsIdade = () => {
    function contar() {
        let inicio = document.getElementById('txti')
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')
    
        if (inicio.value.length === '' || fim.value.length === '' || passo.value.length === 0) {
            res.innerHTML = 'Impossivel contar!'
        } else {
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (p <= 0) {
                alert('Considerando o passo igual a 1!')
                p = 1
            }
            if (i < f) {
                //Contagem crescente                            
                res.innerHTML = 'Contagem crescente:<br>'
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c}👉 `
                }
            } else {
                //Contagem decrescente
                res.innerHTML = 'Contagem decrescente:<br>'
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c}👉 `
                }
            }
            res.innerHTML += '🏁'
        }
    }
  return (
    <div>
        <h1>Vamos Contar?</h1>
        <section>
            <div id="form">
                <div><label>Início</label> <input name="inicio" id="txti" type="number" placeholder="Digite um numero" /></div>
                <div><label>Fim</label> <input name="fim" id="txtf" type="number" placeholder="Numero igual ou maior que 2" /></div>
                <div><label>Passo</label> <input name="passo" id="txtp" type="number" placeholder="Digite um numero" /></div>
                <div><button onClick={contar}>Contar</button></div>
            </div>
            <div id="res">
                Preparando a contagem...
            </div>
        </section>
    </div>
  )
}

export default JsIdade