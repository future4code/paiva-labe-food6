import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FullAddressRequest(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyNDkxNzQxN30.Ghus3FHLy8YF4Vg2UZu0uy6BNbcZFHpt3q3LZr9EyG8'
    const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRtZUwxQ1FZZHM2Y0FUcm41Qm9sIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzc5LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MjQ5MTA1MTh9.NjFzCsAJYWn98MMfX6j7oM8bPtol2UbbwbVDuh9XTtw'
    const [address, setAddress] = useState([])
    const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile/address"
    
    const getFullAddress = () => {
        axios.get(BASE_URL, {headers: {
            auth: token2
        }})
        .then((res) => {
            console.log(res.data.address)
            setAddress(res.data.address)
        })
        .catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getFullAddress()
    },[])

    return(
        <div>
            <h1>getFullRequest Request</h1>
        </div>
    )
}

//