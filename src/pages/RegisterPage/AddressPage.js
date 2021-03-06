import React, { useContext, useState } from 'react';
import { Button, PageRegister, FormContainer } from "./styled"
import TextInput from '../../components/TextInput/TextInput';
import { addAdress } from '../../requests/PutAddAdress';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';

function AddressPage() {
    document.title = "Labe Eats | Endereço"
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { body, onChange, clear } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const { temporaryToken } = useContext(GlobalStateContext)
    console.log(temporaryToken)
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(!loading)
        addAdress(body, clear, history, temporaryToken);
    }

    return (
        <PageRegister>
            <p>Meu endereço</p>
            <br />
            <form onSubmit={onSubmit}>
                <FormContainer>
                    <TextInput
                        type="text"
                        name="street"
                        value={body.street}
                        label="Logradouro"
                        placeholder="Rua / Av"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <FormContainer>
                    <TextInput
                        type="number"
                        name="number"
                        value={body.number}
                        label="Número"
                        placeholder="Número"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <FormContainer>
                    <TextInput
                        type="complement"
                        name="complement"
                        value={body.complement}
                        label="Complemento"
                        placeholder="Apt / Bloco"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <FormContainer>
                    <TextInput
                        type="text"
                        name="neighbourhood"
                        value={body.neighbourhood}
                        label="Bairro"
                        placeholder="Bairro"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <FormContainer>
                    <TextInput
                        type="text"
                        name="city"
                        value={body.city}
                        label="Cidade"
                        placeholder="Cidade"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <FormContainer>
                    <TextInput
                        type="text"
                        name="state"
                        value={body.state}
                        label="Estado"
                        placeholder="Estado"
                        onChange={onChange}
                        required />
                </FormContainer>
                <br />
                <Button fullWidth>{loading ? <CircularProgress /> : "Criar"}</Button>
            </form>
        </PageRegister>

    )
}
export default AddressPage;