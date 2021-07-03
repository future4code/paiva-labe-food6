import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import CartPage from '../../components/Cart/Cart';
import TituloPage from '../../components/Cart/TituloPage'
import AddressCart from '../../components/Cart/AddressCart'
import { Button } from '../../components/Button/Button';
import FooterCart from '../../components/Cart/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';
import CardProduto from '../../components/Card/CardProduto';
import axios from "axios"
import { BASE_URL } from '../../constants/constants';


function CardPage() {
  useProtectedPage()

  const [cart,setCart] = useState([])
  const [payment,setPayment] = useState("")
  const [idList,setIDList] = useState([])


  useLayoutEffect(() => {
    getLocalStore()
  },[])

  const getLocalStore = () => { // Carrinho recebe dados de produtos pelo Local Store
    if(localStorage.getItem("cart") && localStorage.getItem("cart").length){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }


  const cartList = cart.length > 0 && cart.map((cart) => {
    
    return(
      <CardProduto product = {cart.product} qntd = {cart.qnt}/>
    )
  })
    
  const handlePayment = (event) => {
    setPayment(event.target.value)
  }


  const BuyFood = () => {
    const id = cart[0].resID
    let body = {}

    const result = cart.length > 0 && cart.map(cart => ({id: cart.product.id, quantity: cart.qnt}))
    
    body.products = result
    body.paymentMethod = payment

      const header = {
          headers: {
              auth: localStorage.getItem("token")
          }
        }

      axios.
      post(`${BASE_URL}/restaurants/${id}/order`,body,header)
      .then((res) => {
        console.log(body)
        console.log(res)
      })
      .catch((err) => {
        console.log(body)
        console.log(err.response)
      })  
    }

  return (
    <div>
      <TituloPage />
      <AddressCart />
      {cartList}
      <CartPage Payment = {handlePayment} />
      <Button onClick = {BuyFood} >Confirmar</Button>
      <FooterCart />

    </div>


  )
}
export default CardPage;