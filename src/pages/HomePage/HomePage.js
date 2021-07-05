
import { useContext, useEffect, useState } from 'react';
import React from 'react';

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import { Container, Filter } from './styled';
import { gotoRest } from '../../router/cordination';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import CardRestaurant from '../../components/Card/CardRes';
import HomeInitial from './HomeInitial';
import Footer from '../../components/Button/Footer';

function HomePage() {
    useProtectedPage()
    const history = useHistory()
    const { restaurants, getRestaurants } = useContext(GlobalStateContext)
    const [itensInFilter, setItensInFilter] = useState([])
    const [isFiltred, setFiltred] = useState(false)

    useEffect(() => {
        getRestaurants()
    }, [])

    console.log(restaurants)

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
            <div onClick={()=> verDetalhe(item.id)} key={item.id}>
            <CardRestaurant
                restaurants = {item}
            />

            </div>
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

    if(!restaurants[0].logoUrl){
        return(
            <HomeInitial />
        )
    }

    return (
        <div>                               
           
            <Filter>
                <p onClick={() => setFiltred(false)}>Tudo</p>
                {restaurants && restaurants.map((result) => {
                    return <p id={result.id} onClick={() => chooseFilter(result.category)}>{result.category}</p>
                })}
            </Filter>


            <Container>
                {isFiltred ? <div style={{width: "95%", margin: "0 auto"}}>{restaurantFIlter}</div> : <div style={{width: "95%", margin: "0 auto"}}>{showRestaurants}</div>}
            </Container>

            <Footer 
                history = {history}
            />
        </div >

    )
}
export default HomePage;