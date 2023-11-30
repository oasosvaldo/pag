import React from 'react'
import './FormCadastro.css'

const FormCadastro = () => {
    

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.querySelector('rua').value = ("")
    document.querySelector('bairro').value = ("")
    document.querySelector('cidade').value = ("")
    document.querySelector('uf').value = ("")
    //document.querySelector('ibge').value=("")
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.querySelector('rua').value = (conteudo.logradouro)
        document.querySelector('bairro').value = (conteudo.bairro)
        document.querySelector('cidade').value = (conteudo.localidade)
        document.querySelector('uf').value = (conteudo.uf)
        //document.querySelector('ibge').value=(conteudo.ibge)
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep()
        alert("CEP não encontrado.")
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '')

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.querySelector('rua').value = "..."
            document.querySelector('bairro').value = "..."
            document.querySelector('cidade').value = "..."
            document.querySelector('uf').value = "..."
            //document.querySelector('ibge').value="..."

            //Cria um elemento javascript.
            var script = document.createElement('script')

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script)

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep()
            alert("Formato de CEP inválido.")
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep()
    }
}
var form, nome, rua, endNumber,endComplemento, bairro, cep, cidade, uf, email, cel, btn1, p1, p2
form = document.querySelector('form')
nome = document.querySelector('nome')
rua = document.querySelector('rua')
endNumber = document.querySelector('endNumber')
bairro = document.querySelector('bairro')
endComplemento = document.querySelector('endComplemento')
cep = document.querySelector('cep')
cidade = document.querySelector('cidade')
uf = document.querySelector('uf')
email = document.querySelector('email')
cel = document.querySelector('cel')
btn1 = document.querySelector('btn1')
p1 = document.querySelector('p1')
p2 = document.querySelector('p2')

function cadastrar() {
    if (nome.value === '' || cep.value === '' || email.value === '' || cel.value === '') {
        alert('Preencha os campos obrigatórios e tente novamente')
    } else {
        // alterando CSS do formulário
        form.style.textAlign = 'left'
        form.style.marginLeft = '15%'
        form.style.fontSize = '22px'
        form.style.background = '#D8BFD8'
        form.style.boxShadow = '3px 3px 10px black'
        form.style.marginTop = '3%'

        // Resposta do formulário
        form.innerHTML = `Olá <strong>${nome.value}!</strong><br>
        Confira suas informações abaixo:<br>
        Nome: ${nome.value}<br>
        Endereço: ${rua.value}, ${endNumber.value}, ${endComplemento.value}<br>
        Bairro: ${bairro.value}, CEP: ${cep.value}<br>
        Cidade: ${cidade.value}, ${uf.value}
        Email: ${email.value}
        Celular: ${cel.value}`

        // Ocultando parágrafo p1
        p1.innerHTML = ''

        // Ocultando botão cadastrar
        btn1.innerHTML = ``

        // Ocultando paragráfo Obs:
        p2.innerHTML = ''
    }
}
    return (
        <div>
            <h1>Faça seu cadastro!</h1>
            <h3>Preencha o formulário abaixo</h3>
            <form className="formCad" method="get">
                <div><label>*<b>Nome:</b><input name="nome" type="text" id="nome" placeholder="Nome Completo" size={60} /></label></div>
                <div>
                    <label>*<b>CEP:</b><input name="cep" type="text" id="cep" placeholder="Digite seu CEP" size="15" maxlength="9"
                        onblur="pesquisacep(this.value);" /></label>
                    <label><b>Endereço:</b><input name="rua" type="text" id="rua" size={30}/></label>
                </div>
                <div>
                    <input type="text" id="endNumber" placeholder="Número" />
                    <label>Complemento:</label>
                    <input type="text" id="endComplemento" placeholder="Complemento" />
                </div>
                <div><label><b>Bairro:</b><input name="bairro" type="text" id="bairro" size="60" /></label></div>
                <div>
                    <label><b>Cidade:</b><input name="cidade" type="text" id="cidade" size="44" /></label>
                    <label><b>Estado:</b><input name="uf" type="text" id="uf" size="2" /></label>
                </div>
                <div>
                    <label>*<b>Celular:</b><input name="cel" type="text" id="cel" size="20" /></label>
                </div>
                <div>
                    <label>*<b>Email:</b><input name="email" type="text" className="email" size="60" /></label>
                </div>
                <div className='btnFormCad'>
                    <button id="btn1" onClick={cadastrar}>Cadastrar</button>
                    <button id="btn2">Novo Cadastro</button>
                </div>
            </form>
        </div>
    )
}

export default FormCadastro