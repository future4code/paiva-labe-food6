import React, {  useContext, useLayoutEffect, useState } from 'react';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import CartPage from '../../components/Cart/Cart';
import TituloPage from '../../components/Cart/TituloPage'
import AddressCart from '../../components/Cart/AddressCart'
import { Button } from '../../components/Button/Button';
import useProtectedPage from '../../hooks/useProtectedPage';
import CardProduto from '../../components/Card/CardProduto';
import axios from "axios"
import { BASE_URL } from '../../constants/constants';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Button/Footer';
import RestaurantCart from '../../components/Cart/RestaurantCart';
import {CartArea,PriceArea,TotalValor} from "./styled"


function CardPage() {
  useProtectedPage()
  const history = useHistory()
  const [cart,setCart] = useState([])
  const [payment,setPayment] = useState("")
  const {userProfile,getProfile} = useContext(GlobalStateContext)
  const [shipping,setShipping] = useState(0)
  const [total,setTotal] = useState(0)

  let totalProduto = 0

  useLayoutEffect(() => {
    getLocalStore()
    getProfile()
  },[])


  const getLocalStore = () => { // Carrinho recebe dados de produtos pelo Local Store
    if(localStorage.getItem("cart") && localStorage.getItem("cart").length){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }

  const cartList = cart.length > 0 && cart.map((cart) => { //Cria card com produtos od carrinho
    return(
      <CardProduto product = {cart.product} qntd = {cart.qnt}/>
    )
  })
    
  const handlePayment = (event) => { //Armazena tipo de pagamento
    setPayment(event.target.value)
  }

  const getShipping = (price) => {
    setShipping(price)
    setTotal(shipping + totalProduto)
  }

  for(let i = 0; i < cart.length; i++){ // Cria valor total
    totalProduto = cart[i].product.price * parseInt(cart[i].qnt) + totalProduto
  }



  const BuyFood = () => { // Cria Body e faz a compra
    const id = cart[0].resID
    let body = {}

    //Resgata os dados para o Body
    const result = cart.length > 0 && cart.map(cart => ({id: cart.product.id, quantity: cart.qnt}))
    //Cria o Body
    body.products = result
    body.paymentMethod = payment

    //Inicia processo de compra
      const header = {
          headers: {
              auth: localStorage.getItem("token")
          }
        }

      axios.
      post(`${BASE_URL}/restaurants/${id}/order`,body,header)
      .then((res) => {
        localStorage.removeItem('cart')
        getLocalStore() //Resgata Local Store

      })
      .catch((err) => {
        console.log(err.response)
      })  
    }

  return (
    <CartArea>
      <TituloPage />
      <AddressCart profile = {userProfile} />
      {cartList ? (
        <div>
          <RestaurantCart id = {cart[0].resID} shippingPrice = {getShipping} />
          {cartList}
          <PriceArea>
            <h3>Frete: {shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            <h3>Compra: {totalProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            <TotalValor>
              <h3>Total:</h3>
              <h3>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            </TotalValor>
          </PriceArea>
          <CartPage Payment = {handlePayment} />
          <Button  onClick = {BuyFood} >Confirmar</Button>
        </div> 

        
      ): "Carrinho Vazio"}

      <Footer 
        history = {history}
      />

    </CartArea>


  )
}
export default CardPage;