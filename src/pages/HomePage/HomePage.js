import { ControlCameraOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function HomePage() {
    const {restaurants, getRestaurants}= useContext(GlobalStateContext)
    console.log(restaurants)


    return (
        <div>

            <h1>Oi eu sou a HomePage</h1>
            
        </div>
        
    )
}
export default HomePage;