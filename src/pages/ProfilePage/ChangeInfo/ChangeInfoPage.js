import React from 'react';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import TextInput from '../../../components/TextInput/TextInput';
import useForm from '../../../hooks/useForm';
import useProtectedPage from '../../../hooks/useProtectedPage';
import { useHistory } from 'react-router';
import { gotoBack } from '../../../router/cordination';
import { useUpdateProfile } from '../../../requests/UpdateProfile';
import { Button } from '../../../components/Button/Button';
import './info.scss';


function ChangeInfoPage() {
    useProtectedPage()
    const history = useHistory()
    const { body, onChange, clear } = useForm({ name: "", email: "", cpf: "" })
    const { setProfile } = useUpdateProfile()

    console.log(body)

    const onSubmitRegister = (event) => {
        event.preventDefault()
        setProfile(body)
        clear()
    }
    return (
        <div>
            <header>
                <ArrowBackIosSharpIcon onClick={() => gotoBack(history)} />
                <h2>Editar</h2>
            </header>

            <main>
                <form onSubmit={onSubmitRegister}>
                    <TextInput
                        type="text"
                        name="name"
                        value={body.name}
                        label="Nome"
                        onChange={onChange}
                    />

                    <TextInput
                        type="email"
                        name="email"
                        value={body.email}
                        label="Email"
                        onChange={onChange}
                    />

                    <TextInput
                        type="text"
                        name="cpf"
                        value={body.cpf}
                        label="CPF"
                        onChange={onChange}
                    />

                    <Button type="submit">Salvar</Button>
                </form>
            </main>
        </div>
    )
}
export default ChangeInfoPage;
