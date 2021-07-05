import React from 'react'
import useProtectedPage from '../../../hooks/useProtectedPage';
import useForm from '../../../hooks/useForm';
import TextInput from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { changeAdress } from '../../../requests/PutAddAdress';
import './address.scss';
import HeaderRestaurant from "../../../components/Header/HeaderRestaurant"
import {FormContainer} from "../../RegisterPage/styled"



function ChangeAddress() {   

    useProtectedPage()
    const { body, onChange, clear } = useForm({ street: "", neighbourhood: "", number: "", complement: "", city: "", state: "" })

    const onSubmitChangeAddress = (event) => {
        event.preventDefault()
        changeAdress(body, clear, history);
    }
    
    return (

        <div>
            <HeaderRestaurant />
                 <main>
                <form onSubmit={onSubmitChangeAddress}>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="street"
                            value={body.street}
                            label="Logradouro"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="number"
                            name="number"
                            value={body.number}
                            label="Número"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="neighbourhood"
                            value={body.neighbourhood}
                            label="Bairro"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="complement"
                            value={body.complement}
                            label="Complemento"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="city"
                            value={body.city}
                            label="Cidade"
                            onChange={onChange}
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            type="text"
                            name="state"
                            value={body.state}
                            label="Estado"
                            onChange={onChange}
                        />
                    </FormContainer>

                    <Button type="submit">Enviar</Button>

                </form>
            </main>
        </div>
    )
}

export default ChangeAddress;