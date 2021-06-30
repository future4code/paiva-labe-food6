import React from 'react';
import { Button, PageRegister, FormContainer } from "../RegisterPage/styled"
import TextInput from '../../components/TextInput/TextInput';
import { SignUpRequest } from "../../requests/AccessApp"
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {gotoAddress} from '../../router/cordination'

function RegisterPage() {
    const history = useHistory()
    const { body, onChange, clear } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        SignUpRequest(body, clear);
    }


    return (
        <PageRegister>
            <h1>Future Eats</h1>
            <h4>Cadastrar</h4>

            <form onSubmit={onSubmit}>
                <FormContainer>
                    <TextInput
                        type="text"
                        name="nome"
                        value={body.text}
                        label="Nome"
                        placeholder="Nome e Sobrenome"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="email"
                        name="email"
                        value={body.email}
                        label="E-mail"
                        placeholder="email@email.com"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="string"
                        name="CPF"
                        value={body.string}
                        label="CPF"
                        placeholder="000.000.000-00"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="password"
                        name="password"
                        value={body.password}
                        label="Senha"
                        placeholder="Mínimo 6 caracteres"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="password"
                        name="password"
                        value={body.password}
                        label="Confirmar"
                        placeholder="Confirmar a senha anterior"
                        onChange={onChange}
                        required />

                </FormContainer>
            </form>
            
            <Button onClick={() => gotoAddress(history)}>Criar</Button>


        </PageRegister>
    )
}
export default RegisterPage;