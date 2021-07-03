
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import { Container, CardRest, Filter } from './styled';
import { gotoRest } from '../../router/cordination';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import CardRestaurant from '../../components/Card/CardRes';

function HomePage() {
    useProtectedPage()
    const history = useHistory()
    const { restaurants, getRestaurants } = useContext(GlobalStateContext)
    const [itensInFilter, setItensInFilter] = useState([])
    const [isFiltred, setFiltred] = useState(false)

    useEffect(() => {
        getRestaurants()
    }, [])


    const verDetalhe = (id) => {
        gotoRest(history, id)
    }
    const chooseFilter = (category) => {

        restaurants.filter(choosed => {
            if (choosed.category === category) {
                setItensInFilter([choosed])
                setFiltred(true)
            }
            return true
        })
    }

    const restaurantFIlter = itensInFilter.length && itensInFilter.map((item) => {
        return (
            <CardRest onClick={() => verDetalhe(item.id)} key={item.id}>
                <img src={item.logoUrl} alt="foto-do-prato" />
                <h1>{item.name}</h1>
                <div>
                    <p>+-{item.deliveryTime}min</p>
                    <p>Frete R${item.shipping}</p>
                </div>
            </CardRest>
        )
    }
    )

    const showRestaurants = restaurants && restaurants.map((rest) => {

        return(
            <div onClick={()=> verDetalhe(rest.id)} key={rest.id}>
            <CardRestaurant
                restaurants = {rest}
            />

            </div>
        )
    })

    return (
        <div>
            <Header />

            <TextField
                type="text"
                fullWidth
                variant="outlined"
            />
            <Filter>
                <p onClick={() => setFiltred(false)}>Tudo</p>
                {restaurants && restaurants.map((result) => {
                    return <p id={result.id} onClick={() => chooseFilter(result.category)}>{result.category}</p>
                })}
            </Filter>


            <Container>
                {isFiltred ? <div style={{width: "95%", margin: "0 auto"}}>{restaurantFIlter}</div> : <div style={{width: "95%", margin: "0 auto"}}>{showRestaurants}</div>}
            </Container>
        </div >

    )
}
export default HomePage;