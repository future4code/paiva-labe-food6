
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import { Container, CardRest } from './styled';
import { gotoRest } from '../../router/cordination';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const history= useHistory()
    const [restaurants, setRestaurants] = useState("")
    console.log(restaurants)

    const testegetRestaurants = () => {

        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        )
            .then((res) => {
                setRestaurants(res.data.restaurants)

            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        testegetRestaurants()
    }, [])

    const verDetalhe=(id)=>{
        gotoRest(history, id)

    }
    const showRestaurants = restaurants && restaurants.map((rest) => {
        return <CardRest onClick={()=> verDetalhe(rest.id)} key={rest.id}>
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