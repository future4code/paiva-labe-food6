import React from 'react';
import Header from '../../components/Header/Header';
import { Button, PageRegister, FormContainer } from "./styled"
import TextInput from '../../components/TextInput/TextInput';
import { addAdress } from '../../requests/PutAddAdress';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

function AddressPage() {
    const history = useHistory()
    const { body, onChange, clear } = useForm({ street: "", number: "",neighbourhood:"", city:"", state:"", complement:"" })

    const onSubmit = (e) => {
        e.preventDefault();
        addAdress(body, clear, history);
    }


    return (
        <div> <Header />


            <h4>Meu endereço</h4>

            <form onSubmit={onSubmit}>
                <TextInput
                    type="text"
                    name="street"
                    value={body.street}
                    label="rua"
                    onChange={onChange}
                    required />

                <TextInput
                    type="number"
                    name="number"
                    value={body.number}
                    label="numero"
                    onChange={onChange}
                    required />

                <TextInput
                    type="text"
                    name="neighbourhood"
                    value={body.neighbourhood}
                    label="bairo"
                    onChange={onChange}
                    required />

                <TextInput
                    type="text"
                    name="city"
                    value={body.city}
                    label="cidade"
                    onChange={onChange}
                    required />

                <TextInput
                    type="text"
                    name="state"
                    value={body.state}
                    label="estado"
                    onChange={onChange}
                    required />
                    
                <TextInput
                    type="text"
                    name="complement"
                    value={body.complement}
                    label="complemento"
                    onChange={onChange}
                />
                <Button
                    fullWidth
                >Cadastrar</Button>
            </form>

        </div>
    )
}
export default AddressPage;