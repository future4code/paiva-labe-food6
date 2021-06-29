import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function SignUpRequest(){
    
    const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/signup"
    const body = {
        "name": "Astrodev",
        "email": "astrodev@future4.com",
        "cpf": "111.111.111-11",
        "password": "123456"
    }

    const signUp = () => {
        axios.post(BASE_URL, body, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyNDkxNzQxN30.Ghus3FHLy8YF4Vg2UZu0uy6BNbcZFHpt3q3LZr9EyG8"
            }
        })
        .then((res) => {
            console.log(res.data)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        signUp()
    },[])

    return(
        <div>
            <h1>SignUpRequest</h1>
        </div>
    )
}