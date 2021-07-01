import React from 'react';
import { TextField } from '@material-ui/core';


function TextInput({ type, name, value, label, placeholder, onChange }) {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            label={label}
            placeholder={placeholder}
            required
        />

    )
}
export default TextInput;