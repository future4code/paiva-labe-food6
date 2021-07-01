import React from 'react';
import { Button, PageRegister, FormContainer } from "./styled"
import { SignUpRequest } from "../../requests/AccessApp"
import useForm from '../../hooks/useForm';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from "../../components/FileInput/FileInput"



function AddressPage() {
    const classes = useStyles();
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

            <p>Meu endereço</p>

            <form onSubmit={onSubmit}>
                <FormContainer>
                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-logradouro">Logradouro*</InputLabel>
                            <OutlinedInput
                                type="string"
                                name="street"
                                value={body.string}
                                placeholder="Rua / Av"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>
                    <FormContainer>

                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-numero">Número*</InputLabel>
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
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-complemento">Complemento</InputLabel>
                            <OutlinedInput
                                type="string"
                                name="apartment"
                                value={body.apartment}
                                placeholder="Apt / Bloco"
                                onChange={onChange}
                                labelWidth={100}
                            />
                        </FormControl>

                    </FormContainer>
                    <FormContainer>

                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-bairro">Bairro*</InputLabel>
                            <OutlinedInput
                                type="text"
                                name="neighbourhood"
                                value={body.text}
                                placeholder="Bairro"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>
                    <FormContainer>

                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-cidade">Cidade*</InputLabel>
                            <OutlinedInput
                                type="text"
                                name="city"
                                value={body.text}
                                placeholder="Cidade"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>
                    <FormContainer>

                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-estado">Estado*</InputLabel>
                            <OutlinedInput
                                type="text"
                                name="state"
                                value={body.text}
                                placeholder="Estado"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>


                </FormContainer>

                <FormContainer>
                    <Button type="">Salvar</Button>
                </FormContainer>

            </form>

        </PageRegister >
    )
}
export default AddressPage;