import React, { useState } from 'react';
import { Button, PageRegister, FormContainer } from "../RegisterPage/styled"
import { SignUpRequest } from "../../requests/AccessApp"
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from "../../components/FileInput/FileInput";


function RegisterPage() {
    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        showConfirm: false,
        
    });

    const history = useHistory()
    const { body, onChange, clear } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    })
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleShowPasswordConfirm = () => {
        setValues({ ...values, showConfirm: !values.showConfirm });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownConfirm = (event) => {
        event.preventDefault();
      };

    const onSubmit = (e) => {
        e.preventDefault();
        if (body.password === body.passwordClick) {

            SignUpRequest(body, clear, history);
        } else {
            alert("Senhas incompatíveis")
        }

    }
    
    return (
        <PageRegister>
            <img src={logo} alt="Future Eats" />
            <p>Cadastrar</p>
            <form onSubmit={onSubmit}>
                <FormContainer>
                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-nome">Nome*</InputLabel>
                            <OutlinedInput
                                type="name"
                                name="name"
                                value={body.name}
                                placeholder="Nome e Sobrenome"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>
                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-email">E-mail*</InputLabel>
                            <OutlinedInput
                                type="email"
                                name="email"
                                value={body.email}
                                placeholder="email@email.com"
                                onChange={onChange}
                                required
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>

                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-cpf">CPF*</InputLabel>
                            <OutlinedInput
                                type="string"
                                name="cpf"
                                inputProps={{
                                    maxLength: 14,
                                    pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`,
                                  }}
                                value={body.string}
                                placeholder="000.000.000-00"
                                onChange={onChange}
                                required
                                variant="outlined"
                                labelWidth={100}
                            />
                        </FormControl>
                    </FormContainer>

                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Senha*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={body.password}
                                placeholder="Mínimo 6 caracteres"
                                onChange={onChange}
                                name="password"
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={100}

                            />
                        </FormControl>

                    </FormContainer>

                    <FormContainer>
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-passwordClick">Confirmar*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-passwordClick"
                                type={values.showConfirm ? "text" : "password"}
                                value={body.passwordClick}
                                placeholder="Inserir a senha anterior"
                                onChange={handleChange('passwordClick')}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleShowPasswordConfirm}
                                            onMouseDown={handleMouseDownConfirm}
                                            edge="end"
                                        >
                                            {values.showConfirm ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={100}

                            />
                        </FormControl>
                    </FormContainer>


                </FormContainer>
                <Button type="submit" fullWidth>Criar</Button>
            </form>

        </PageRegister >
    )
}
export default RegisterPage;

