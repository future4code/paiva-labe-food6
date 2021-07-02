import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import CartPage from '../../components/Cart/Cart';
import TituloPage from '../../components/Cart/TituloPage'
import AddressCart from '../../components/Cart/AddressCart'
import { Button } from '../../components/Button/Button';
import FooterCart from '../../components/Cart/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';
import CardProduto from '../../components/Card/CardProduto';


function CardPage() {
  useProtectedPage()
  const [cart,setCart] = useState([])

  useLayoutEffect(() => {
    getLocalStore()
  },[])

  const getLocalStore = () => {
    if(localStorage.getItem("cart") && localStorage.getItem("cart").length){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }

  console.log(cart)

  const cartList = cart.length > 0 && cart.map((cart) => {
    return(
      <CardProduto product = {cart.product}/>
    )
  })

  return (
    <div>
      <TituloPage />
      <AddressCart />
      {/* <CartPage /> */}
      {cartList}
      <Button>Confirmar</Button>
      <FooterCart />

    </div>


  )
}
export default CardPage;