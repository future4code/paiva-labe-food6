import React from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import useForm from '../../hooks/useForm';
import {login} from "../../requests/LoginRequest"


function LoginPage() {
    const { body, onChange, clear } = useForm({ email:"", password:""})
    //const history = useHistory()
    //Desenvolver um formulário e a funcao 'clear' do useForm limpa todos os campos
    //IMPORTANTE: ao criar o de senha, inserir mais um campo no useform e ficaria {login: "", senha: ""} por exemplo e esse padrao será usado em todos os campos de input
    
    const onSubmit=(e)=>{
        e.preventDefault();
        login(body, clear);
    }
    console.log(body)
    return (
        <div>
           
            {/* <TextInput type="tipo do input" name="nome do input, será usado com o customhook do useForm" value="valor dele de acordo com o hook" label="mensagem na parte superior" placeholder="mensagem do campo de busca" onChange="evento de mudança que vai pra o estado do custom hook" /> */}
           <form onSubmit={onSubmit}>

            <TextInput 
            type="text" 
            name="email" 
            value={body.email} 
            label="Email" 
            onChange={onChange} 
            required/>
            
            <TextInput 
            type="password" 
            name="password" 
            value={body.password} 
            label="password"          
            onChange={onChange}
            required />

            <button>Entrar</button>

            </form>
           
        </div>
    )
}

export default LoginPage;