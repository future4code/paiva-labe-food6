import React, { useContext, useState } from "react"
import { GlobalStateContext } from "../../globalstate/GlobalStateContext"
import OptionQntd from "../FileInput/OptionQnt"
import { ModalBody } from "./styled"

function ModalComponent(props) {
  const {makeCart} = useContext(GlobalStateContext)
  const [qntd, setQntd] = useState(1)

  const handleQntd = (event) => {
    console.log(event.target.value)
    setQntd(event.target.value)
  }

  return (
      <ModalBody>
        <button onClick = {props.close}>x</button>
        <h2 id="simple-modal-title">Selecione a quantidade desejada</h2>
        <select onChange = {handleQntd}>
          <OptionQntd/>
        </select>
        <button onClick = {() => makeCart(props.product,qntd)} >Adicionar ao Carrinho</button>
    </ModalBody>
  )
}

export default ModalComponent



