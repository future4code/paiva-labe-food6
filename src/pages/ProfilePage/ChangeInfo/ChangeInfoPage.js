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
import { FormContainer } from '../../LoginPage/styled';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import clsx from "clsx";
import { useStyles } from '../../../components/FileInput/FileInput';

function ChangeInfoPage() {
    useProtectedPage()
    const classes = useStyles();
    const history = useHistory()
    const { body, onChange, clear } = useForm({ name: "", email: "", cpf: "" })
    const { setProfile } = useUpdateProfile()

    const onSubmitRegister = (event) => {
        event.preventDefault()
        setProfile(body, history)
        clear()
    }
    return (
        <div id="infoContainer">
            <header>
                <div>
                    <ArrowBackIosSharpIcon onClick={() => gotoBack(history)} />
                    <h2>Editar</h2>
                </div>

            </header>

            <main>
                <form onSubmit={onSubmitRegister}>
                    <div className="divAlign">
                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Nome</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="name"
                                    value={body.name}
                                    placeholder="Nome completo"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    type="email"
                                    name="email"
                                    value={body.Email}
                                    placeholder="usuario@dominio.com"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>

                        <FormContainer>
                            <FormControl className={clsx(classes.margin)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">CPF</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    name="cpf"
                                    value={body.cpf}
                                    placeholder="123.456.789-01"
                                    onChange={onChange}
                                    required
                                    labelWidth={100}
                                />
                            </FormControl>
                        </FormContainer>
                    </div>

                    <Button type="submit">Salvar</Button>
                </form>
            </main>
        </div>
    )
}
export default ChangeInfoPage;
