
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import { Container, CardRest } from './styled';
import { gotoRest } from '../../router/cordination';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import useProtectedPage from '../../hooks/useProtectedPage';

function HomePage() {
    useProtectedPage()
    const history = useHistory()
    const { restaurants, getRestaurants } = useContext(GlobalStateContext)

    console.log(restaurants)

    useEffect(() => {
        getRestaurants()
    }, [])

    const verDetalhe = (id) => {
        gotoRest(history, id)

    }
    const showRestaurants = restaurants && restaurants.map((rest) => {
        return <CardRest onClick={() => verDetalhe(rest.id)} key={rest.id}>
            <img src={rest.logoUrl} alt="foto-do-prato" />
            <h1>{rest.name}</h1>
            <div>
                <p>+-{rest.deliveryTime}min</p>
                <p>Frete R${rest.shipping}</p>
            </div>
        </CardRest>
    })

    return (
        <div>
            <Header />

            <TextField
                type="text"
                fullWidth
                variant="outlined"
            />
            <Container>
                {showRestaurants}
            </Container>
        </div>

    )
}
export default HomePage;