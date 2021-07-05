import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import useForm from '../../hooks/useForm';
import { LoginRequest } from "../../requests/AccessApp"
import { gotoRegister } from '../../router/cordination'
import { Main, FormContainer, Button } from "../LoginPage/styled"
import logo from '../../Assets/logo.png'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { CircularProgress } from '@material-ui/core';


function LoginPage() {
    document.title = "Labe Eats | Login"
    const history = useHistory()
    useUnprotectedPage()
    const { body, onChange, clear } = useForm({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(!loading)
        LoginRequest(body, clear, history);
    }
    return (
        <Main>
            <FormContainer >
                <form onSubmit={onSubmit}>

                    <img src={logo} alt="logo" />
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
                    <br />
                    <Button fullWidth>{loading ? <CircularProgress /> : "Logar"}</Button>
                    <h4 onClick={() => gotoRegister(history)} style={{ padding: "10px 0" }}>Ainda não tem Cadastro? <u>Clique aqui</u></h4>
                </form>
            </FormContainer>

        </Main>
    )
}

export default LoginPage;