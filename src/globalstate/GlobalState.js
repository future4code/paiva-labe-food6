import React from 'react'
import axios from "axios"
import {GlobalStateContext} from "./GlobalStateContext"

function GlobalState(props) {

    return (
        <GlobalStateContext.Provider>
        {props.children}
    </GlobalStateContext.Provider>
    )
}

export default GlobalState
