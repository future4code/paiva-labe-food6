import React, { useState } from 'react';
import { Button, PageRegister, FormContainer } from "../RegisterPage/styled"
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
import useProtectedPage from '../../hooks/useProtectedPage';
import clsx from "clsx";
import { gotoAddress } from '../../router/cordination';


function RegisterPage() {
    useProtectedPage()
    const classes = useStyles();
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        showConfirm: false,

    });

    const history = useHistory()
    const { body, onChange } = useForm({
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

    const onChangeConfirmPassword = (e) => {
        if (body.password !== e.target.value) {
            setIsValidPassword(true);
        } else {
            setIsValidPassword(false);
        }
        setConfirmPassword(e.target.value);
    };

    const onClickSave = async (event) => {
        event.preventDefault();
        
        if (body.password === confirmPassword) {
            setIsValidPassword(false);           
            gotoAddress(history)
            } else {
            alert("Senhas incompatíveis");
        }
    };

    /*const onSubmit = (e) => {
        e.preventDefault();
        if (body.password === body.passwordClick) {

            SignUpRequest(body, clear, history);
        } else {
            alert("Senhas incompatíveis")
        }

    }*/

    return (
        <PageRegister>
            <img src={logo} alt="Future Eats" />
            <p>Cadastrar</p>
            <form onSubmit={onClickSave}>
                <FormContainer>
                    <FormContainer>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Senha*</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={(body.password)}
                                placeholder="Mínimo 6 caracteres"
                                onChange={(handleChange("password"), onChange)}
                                name="password"
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword }
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
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-passwordClick">Confirmar*</InputLabel>
                            <OutlinedInput
                                id="passwordClick"
                                type={values.showConfirm ? "text" : "password"}
                                value={(body.confirmPassword, confirmPassword)}
                                placeholder="Inserir a senha anterior"
                                onChange={
                                    (handleChange("confirmPassword"), onChangeConfirmPassword)
                                  }
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
                        <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            error={isValidPassword}
            fullWidth
          >
                        </FormControl>
                    </FormContainer>

                </FormContainer>
                <Button type="submit" fullWidth>Criar</Button>
            </form>

        </PageRegister >
    )
}
export default RegisterPage;

