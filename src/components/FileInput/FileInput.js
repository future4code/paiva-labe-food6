import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '40ch',
    },
}));

export default function InputAdornments() {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>

            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    onChange={""}
                    type={""}
                    name={""}
                    value={""}
                    label={""}
                    placeholder={""}
                    required
                    endAdornment={""}

                />
            </FormControl>

        </div>

    );
}