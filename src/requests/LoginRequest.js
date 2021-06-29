import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function LoginRequest(){
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyNDkxNzQxN30.Ghus3FHLy8YF4Vg2UZu0uy6BNbcZFHpt3q3LZr9EyG8')
    const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/login"
    const body = {
        "email": "astrodev@future4.com",
        "password": "123456"
    }

    const login = () => {
        axios.post(BASE_URL, body, {
            auth: token
        })
        .then((res) => {
            console.log(`token: ${res.data.token}`)
            setToken(res.data.token)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    useEffect(() => {
        login()
    },[])

    return(
        <div>
            <h1>LoginRequest</h1>
        </div>
    )
}

//