import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import useForm from '../../hooks/useForm';

function LoginPage() {
    const { body, onChange, clear } = useForm({ login: "" })

    //Desenvolver um formulário e a funcao 'clear' do useForm limpa todos os campos
    //IMPORTANTE: ao criar o de senha, inserir mais um campo no useform e ficaria {login: "", senha: ""} por exemplo e esse padrao será usado em todos os campos de input
    console.log(body)
    return (
        <div>
            <h1>Oi eu sou a LoginPage</h1>
            {/* <TextInput type="tipo do input" name="nome do input, será usado com o customhook do useForm" value="valor dele de acordo com o hook" label="mensagem na parte superior" placeholder="mensagem do campo de busca" onChange="evento de mudança que vai pra o estado do custom hook" /> */}
            <TextInput type="text" name="login" value={body.login} label="Email" placeholder="email@email.com" onChange={onChange} />
        </div>
    )
}

export default LoginPage;