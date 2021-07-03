import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, gotoLogin } from '../../router/cordination';
import { PageHomeInitial } from '../HomePage/styled';

function LoadingPage() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")
        setTimeout(() => {
            if (token === null) {
                gotoLogin(history)
            } else {
                goToHomePage(history)
            }
        }, 1000)

    }, [])

    return (
        <PageHomeInitial>
            <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/FFDB4396-F725-4577-9783-AB1185C431A3.png" alt="Página Inicial" />
        </PageHomeInitial>

    )
}
export default LoadingPage;