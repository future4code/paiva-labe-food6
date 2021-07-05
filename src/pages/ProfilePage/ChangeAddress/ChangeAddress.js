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
import { FormContainer } from '../../LoginPage/styled';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import clsx from "clsx";
import { useStyles } from '../../../components/FileInput/FileInput';


function ChangeAddress() {
    const classes = useStyles();

    useProtectedPage()
    const history = useHistory()
    const { body, onChange, clear } = useForm({ street: "", neighbourhood: "", number: "", complement: "", city: "", state: "" })

    const onSubmitChangeAddress = (event) => {
        event.preventDefault()
        changeAdress(body, clear, history);
    }
    console.log(body)
    return (

        <div id="infoContainer">
            <header>
                <div>
                    <ArrowBackIosSharpIcon onClick={() => gotoBack(history)} />
                    <h2>Endereço</h2>
                </div>

            </header>

            <main>
                <form onSubmit={onSubmitChangeAddress}>

                    <div className="divAlign">

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Logradouro</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="street"
                                    value={body.street}
                                    placeholder="Logradouro"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>



                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Numero</InputLabel>
                                <OutlinedInput
                                    type="number"
                                    name="number"
                                    value={body.number}
                                    placeholder="Número"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Complemento</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="complement"
                                    value={body.complement}
                                    placeholder="Complemento"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>



                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Bairro</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="neighbourhood"
                                    value={body.neighbourhood}
                                    placeholder="usuario@dominio.com"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Cidade</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="city"
                                    value={body.city}
                                    placeholder="cidade"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel>Estado</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="state"
                                    value={body.state}
                                    placeholder="Estado"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <Button type="submit">Enviar</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ChangeAddress;