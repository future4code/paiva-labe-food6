import React from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import useForm from '../../hooks/useForm';
import { LoginRequest } from "../../requests/AccessApp"
import { gotoRegister } from '../../router/cordination'
import { Main, FormContainer, Button } from "../LoginPage/styled"
import { logo } from '../../Assets/logo.png'


function LoginPage() {
    const history = useHistory()

    const { body, onChange, clear } = useForm({ email: "", password: "" })
    //const history = useHistory()
    //Desenvolver um formulário e a funcao 'clear' do useForm limpa todos os campos
    //IMPORTANTE: ao criar o de senha, inserir mais um campo no useform e ficaria {login: "", senha: ""} por exemplo e esse padrao será usado em todos os campos de input

    const onSubmit = (e) => {
        e.preventDefault();
        LoginRequest(body, clear, history);
    }
    console.log(body)
    return (
        <Main>


            {/* <TextInput type="tipo do input" name="nome do input, será usado com o customhook do useForm" value="valor dele de acordo com o hook" label="mensagem na parte superior" placeholder="mensagem do campo de busca" onChange="evento de mudança que vai pra o estado do custom hook" /> */}
            <FormContainer >
          <form  onSubmit={onSubmit}>

            <img src={logo} alt="logo"/> 
                <h3>Entrar</h3>
                <TextInput
                    type="text"
                    name="email"
                    value={body.email}
                    label="Email"
                    onChange={onChange}
                    required />

                <TextInput
                    type="password"
                    name="password"
                    value={body.password}
                    label="password"
                    onChange={onChange}
                    required />

                <Button
                    fullWidth
                >Entrar</Button>
                <h4 onClick={() => gotoRegister(history)}>Ainda não tem Cadastro? Clique aqui</h4>
</form>
            </FormContainer>

        </Main>
    )
}

export default LoginPage;