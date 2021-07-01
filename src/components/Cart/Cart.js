import React from 'react'
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { PageCart, useStyles } from '../../pages/CartPage/styled';

function CartPage() {
function StyledRadio(props) {
    const classes = useStyles();
    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

    return (
        <PageCart>              
                        
            <h5>Carinho Vazio</h5>

            <FormControl component="fieldset">
                <FormLabel component="legend">Formas de Pagamento</FormLabel>
                
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="female" control={<StyledRadio />} label="Dinheiro" />
                    <FormControlLabel value="male" control={<StyledRadio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>


        </PageCart>
    )
}
export default CartPage;








