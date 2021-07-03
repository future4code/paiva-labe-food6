import React from 'react';
import Header from '../../components/Header/Header';
import { Button, PageRegister, FormContainer } from "./styled"

import TextInput from '../../components/TextInput/TextInput';
import { addAdress } from '../../requests/PutAddAdress';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

function AddressPage() {
    const history = useHistory()
    const { body, onChange, clear } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })


    const onSubmit = (e) => {
        e.preventDefault();
        addAdress(body, clear, history);
    }


    return (
        <div> <Header />
        
            <PageRegister>
            <p>Meu endereço</p>
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
                    <FormContainer>
                        <TextInput
                            type="number"
                            name="street"
                            value={body.number}
                            label="Número"
                            placeholder="Número"
                            onChange={onChange}
                            required />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="string"
                            name="neighbourhood"
                            value={body.neighbourhood}
                            label="Complemento"
                            placeholder="Apt / Bloco"
                            onChange={onChange}
                            required />
                    </FormContainer>
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
                    
                    <Button
                        fullWidth
                    >Cadastrar</Button>
                </form>
            </PageRegister>


        </div>

    )
}
export default AddressPage;