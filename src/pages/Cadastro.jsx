import React from 'react'
import './layoutPages.css'

const Cadastro = () => {
    return (
        <div className='pages'>
            <h1>Faça seu cadastro!</h1>
            <h3>Preencha o formulário abaixo</h3>
            <form id="form" method="get">
                <label>*<b>Nome:</b><input name="nome" type="text" id="nome" size="50" placeholder="Nome Completo" /></label>
                <label>*<b>CEP:</b><input name="cep" type="text" id="cep" placeholder="Digite seu CEP" size="15" maxlength="9"
                    onblur="pesquisacep(this.value);" /></label>
                <label><b>Endereço:</b><input name="rua" type="text" id="rua" size="39" /></label>
                <input type="text" id="endNumber" size="3" placeholder="Número" />
                <b>Complemento:</b>
                <input type="text" id="endComplemento" placeholder="Complemento" />
                <label><b>Bairro:</b><input name="bairro" type="text" id="bairro" size="50" /></label>
                <label><b>Cidade:</b><input name="cidade" type="text" id="cidade" size="33" /></label>
                <label><b>Estado:</b><input name="uf" type="text" id="uf" size="2" /></label>
                <label>*<b>Email:</b><input name="email" type="text" id="email" size="50" /></label>
                <label>*<b>Celular:</b><input name="cel" type="text" id="cel" size="20" /></label>
            </form>
        </div>
    )
}

export default Cadastro