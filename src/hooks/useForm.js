import { useState } from "react";

const useForm = (initialState) => {
    const [body, setBody] = useState(initialState)

    const onChange = (event) => {
        console.log(event.target.value)
        const { name } = event.target
        let {value} = event.target
        
        if(name === "cpf"){

            value= value.replace(/\D/g,"")
            value= value.replace(/(\d{3})(\d)/,"$1.$2")
            value= value.replace(/(\d{3})(\d)/,"$1.$2")
            value= value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

        }

        setBody({ ...body, [name]: value })
    }

    const clear = () => {
        setBody(initialState)
    }
    return { body, onChange, clear }
}

export default useForm;