import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, gotoLogin } from '../../router/cordination';

function LoadingPage() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            gotoLogin(history)
        } else {
            goToHomePage(history)
        }
    }, [])

    return (
        <div>
            <h1>Carregando</h1>
        </div>

    )
}
export default LoadingPage;