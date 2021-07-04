import React from 'react'
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { PageCart, useStyles, FormaPag, DivHr } from '../../pages/CartPage/styled';

function CartPage(props) {
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

            <FormControl component="fieldset">
                <FormaPag>
                    Forma de pagamento
                </FormaPag>
                <DivHr />


                <RadioGroup onChange = {props.Payment} defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel  value="money" control={<StyledRadio />} label="Dinheiro" />
                    <FormControlLabel  value="creditcard" control={<StyledRadio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>


        </PageCart>
    )
}
export default CartPage;








