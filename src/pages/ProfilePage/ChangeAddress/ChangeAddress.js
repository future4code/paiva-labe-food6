import React from 'react'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import useProtectedPage from '../../../hooks/useProtectedPage';
import useForm from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { gotoBack } from '../../../router/cordination';
import TextInput from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { changeAdress } from '../../../requests/PutAddAdress';
import './address.scss';


function ChangeAddress() {

    useProtectedPage()
    const history = useHistory()
    const { body, onChange, clear } = useForm({ street: "", neighbourhood: "", number: "", complement: "", city: "", state: "" })

    const onSubmitChangeAddress = (event) => {
        event.preventDefault()
        changeAdress(body, clear);
    }
    console.log(body)
    return (
        <div>
            <header>
                <ArrowBackIosSharpIcon onClick={() => gotoBack(history)} />
                <h2>Endereço</h2>
            </header>

            <main>
                <form onSubmit={onSubmitChangeAddress}>

                    <TextInput
                        type="text"
                        name="street"
                        value={body.street}
                        label="Logradouro"
                        onChange={onChange}
                    />

                    <TextInput
                        type="number"
                        name="number"
                        value={body.number}
                        label="Número"
                        onChange={onChange}
                    />


                    <TextInput
                        type="text"
                        name="neighbourhood"
                        value={body.neighbourhood}
                        label="Bairro"
                        onChange={onChange}
                    />

                    <TextInput
                        type="text"
                        name="complement"
                        value={body.complement}
                        label="Complemento"
                        onChange={onChange}
                    />


                    <TextInput
                        type="text"
                        name="city"
                        value={body.city}
                        label="Cidade"
                        onChange={onChange}
                    />

                    <TextInput
                        type="text"
                        name="state"
                        value={body.state}
                        label="Estado"
                        onChange={onChange}
                    />

                    <Button type="submit">Enviar</Button>
                </form>
            </main>
        </div>
    )
}

export default ChangeAddress;