import React from 'react';
import { Button, PageRegister, FormContainer } from "./styled"
import TextInput from '../../components/TextInput/TextInput';
import { SignUpRequest } from "../../requests/AccessApp"
import useForm from '../../hooks/useForm';

function AddressPage() {
    const { body, onChange, clear } = useForm({
        neighbourhood: "",
        number: "",
        city: "",
        apartment: "",
        state: "",
        street: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        SignUpRequest(body, clear);
    }


    return (
        <PageRegister>
            <h1>Future Eats</h1>
            <h4>Meu endereço</h4>

            <form onSubmit={onSubmit}>
                <FormContainer>
                    <TextInput
                        type="string"
                        name="logradouro"
                        value={body.street}
                        label="Logradouro"
                        placeholder="Rua / Av"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="number"
                        name="numero"
                        value={body.number}
                        label="Número"
                        placeholder="Número"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="string"
                        name="complemento"
                        value={body.apartment}
                        label="Complemento"
                        placeholder="Apt / Bloco"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="text"
                        name="bairro"
                        value={body.neighbourhood}
                        label="Bairro"
                        placeholder="Bairro"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="text"
                        name="cidade"
                        value={body.city}
                        label="Cidade"
                        placeholder="Cidade"
                        onChange={onChange}
                        required />

                    <TextInput
                        type="text"
                        name="estado"
                        value={body.state}
                        label="Estado"
                        placeholder="Estado"
                        onChange={onChange}
                        required />

                </FormContainer>
            </form>

            <Button onClick={""}>Salvar</Button>


        </PageRegister>
    )
}
export default AddressPage;