import React from 'react';
import { PageHomeInitial } from '../../pages/HomePage/styled'
import useProtectedPage from '../../hooks/useProtectedPage';

function HomeInitial() {
    useProtectedPage()
    return (
        <PageHomeInitial>
            <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/FFDB4396-F725-4577-9783-AB1185C431A3.png" alt="Página Inicial" />
        </PageHomeInitial>
    )

}

export default HomeInitial;