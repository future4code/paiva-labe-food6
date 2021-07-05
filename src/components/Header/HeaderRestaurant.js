import React from 'react'
import { Head } from './styled';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const HeaderRestaurant = () => {
    const history = useHistory();


    const handleGoBack = () => {
        history.goBack()
    }
    const Name = () => {
        if (history.location.pathname === "/restaurant") {
            return ("IFuture")
        } else if (history.location.pathname === `/restaurante/id`) {
            return ("Restaurante")
        } else if (history.location.pathname === "/perfil") {
            return ("Meu Perfil")
        } else if (history.location.pathname === "/registrar" || "/registrar/endereco") {
            return ("Restaurante")
        }
        else if (history.location.pathname === "/carrinho") {
            return ("Meu Carrinho")
        } else {
            return ("")
        }
    }


    return (
        <Head>
            {history.location.pathname === "/restaurant" ? <div className={"zero"}></div> : <ArrowBackIosIcon onClick={handleGoBack} className={"Back"} />}
            <div className={"title"}>{Name()}</div>
        </Head>
    )
}


export default HeaderRestaurant


    