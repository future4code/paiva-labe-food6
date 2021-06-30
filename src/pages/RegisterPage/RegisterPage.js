import React from 'react';
import { Button, PageRegister, FormContainer } from "../RegisterPage/styled"
import TextInput from '../../components/TextInput/TextInput';
import { SignUpRequest } from "../../requests/AccessApp"
import useForm from '../../hooks/useForm';

function RegisterPage() {

    const { body, onChange, clear } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })


    const onSubmit = (e) => {
        e.preventDefault();
        if (body.password === body.passwordcheck) {
            SignUpRequest(body, clear);
        } else {
            alert("Senhas incompatíveis")
        }

    }


    return (
        <PageRegister>
            <h1>Future Eats</h1>
            <h4>Cadastrar</h4>

            <form onSubmit={onSubmit}>
                <FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="name"
                            value={body.text}
                            label="Nome"
                            placeholder="Nome e Sobrenome"
                            onChange={onChange}
                            required />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="email"
                            name="email"
                            value={body.email}
                            label="E-mail"
                            placeholder="email@email.com"
                            onChange={onChange}
                            required />
                    </FormContainer>

                    <FormContainer>
                        <TextInput
                            type="string"
                            name="cpf"
                            value={body.string}
                            label="CPF"
                            placeholder="000.000.000-00"
                            onChange={onChange}
                            required />
                    </FormContainer>

                    <FormContainer>
                        <TextInput
                            type="password"
                            name="password"
                            value={body.password}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            onChange={onChange}
                            required />
                    </FormContainer>

                    <FormContainer>
                        <TextInput
                            type="password"
                            name="passwordcheck"
                            value={body.passwordcheck}
                            label="Confirmar"
                            placeholder="Confirmar a senha anterior"
                            onChange={onChange}
                            required />
                    </FormContainer>
                    <FormContainer>
                        <Button type="submit">Criar</Button>
                    </FormContainer>
                </FormContainer>


            </form>



        </PageRegister >
    )
}
export default RegisterPage;