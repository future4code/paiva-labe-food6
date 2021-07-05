import React from 'react';
import TextInput from '../../../components/TextInput/TextInput';
import useForm from '../../../hooks/useForm';
import useProtectedPage from '../../../hooks/useProtectedPage';
import { useUpdateProfile } from '../../../requests/UpdateProfile';
import { Button } from '../../../components/Button/Button';
import './info.scss';
import HeaderRestaurant from "../../../components/Header/HeaderRestaurant"
import { FormContainer } from "../../RegisterPage/styled"
import { useHistory } from 'react-router-dom';


function ChangeInfoPage() {
    useProtectedPage()
    const { body, onChange, clear } = useForm({ name: "", email: "", cpf: "" })
    const { setProfile } = useUpdateProfile()
    const history = useHistory()
    const onSubmitRegister = (event) => {
        event.preventDefault()
        setProfile(body, history)
        clear()
    }
    return (

        <div>
            <HeaderRestaurant />

            <main>

                <form onSubmit={onSubmitRegister}>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="name"
                            value={body.name}
                            label="Nome"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="email"
                            name="email"
                            value={body.email}
                            label="Email"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="cpf"
                            value={body.cpf}
                            label="CPF"
                            onChange={onChange}
                        />
                    </FormContainer>

                    <Button type="submit">Salvar</Button>
                </form>
            </main>
        </div>
    )
}
export default ChangeInfoPage;
