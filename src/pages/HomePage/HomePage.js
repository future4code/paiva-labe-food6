
import { useContext, useEffect, useState } from 'react';
import React from 'react';

import TextField from '@material-ui/core/TextField';

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
    const [itensInFilter, setItensInFilter] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    const [isFiltred, setFiltred] = useState(false)

    const { restaurants, getRestaurants } = useContext(GlobalStateContext)

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

    
    const getSearched = (event) => {
        
        const searchList = []
        const word = event.target.value
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants && restaurants[i].name.toLowerCase() === word.toLowerCase()) {
                searchList.push(restaurants[i])
            }
        }

        setSearchFilter(searchList)

    }

    const searchList = searchFilter.length && searchFilter.map((rest) => {
        return (
            <div onClick={() => verDetalhe(rest.id)} key={rest.id}>
                <CardRestaurant
                    restaurants={rest}
                />

            </div>
        )
    })

    const restaurantFilter = itensInFilter.length && itensInFilter.map((item) => {
        return (
            <div onClick={() => verDetalhe(item.id)} key={item.id}>
                <CardRestaurant
                    restaurants={item}
                />

            </div>
        )
    }
    )

    const showRestaurants = restaurants && restaurants.map((rest) => {

        return (
            <div onClick={() => verDetalhe(rest.id)} key={rest.id}>
                <CardRestaurant
                    restaurants={rest}
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

            <TextField
                placeholder = "&#128269; Pesquisar Restaurante"
                type="text"
                fullWidth
                variant="outlined"
                name="search"
                onChange={getSearched}
            />


            <Filter>
                <p onClick={() => setFiltred(false)}>Tudo</p>
                {restaurants && restaurants.map((result) => {
                    return <p id={result.id} onClick={() => chooseFilter(result.category)}>{result.category}</p>
                })}
            </Filter>

            <Container>
                {searchFilter.length > 0 ? searchList:
                isFiltred ? <div style={{ width: "95%", margin: "0 auto" }}>{restaurantFilter}</div> : <div style={{ width: "95%", margin: "0 auto" }}>{showRestaurants}</div>
                }
            </Container>

            <Footer
                history={history}
            />
        </div>

    )
}
export default HomePage;