import React from 'react'
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { PageCart, useStyles, FormaPag, DivHr, DivCartBody, DivTituloCart, DivFrete, DivSubTotal, DivValorTotal,DivContainerValor } from '../../pages/CartPage/styled';

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
            <DivCartBody>
                <DivTituloCart>
                    Carinho Vazio
                </DivTituloCart>
                <DivFrete>
                    Frete R$0,00
                </DivFrete>
                <DivContainerValor>
                    <DivSubTotal>SUBTOTAL</DivSubTotal>
                    <DivValorTotal>R$00,00</DivValorTotal>
                </DivContainerValor>

            </DivCartBody>


            <FormControl component="fieldset">
                <FormaPag>
                    Forma de pagamento
                </FormaPag>
                <DivHr />


                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="female" control={<StyledRadio />} label="Dinheiro" />
                    <FormControlLabel value="male" control={<StyledRadio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>


        </PageCart>
    )
}
export default CartPage;








