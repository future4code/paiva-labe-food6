import React from "react"
import { ModalBody } from "./styled"

function ModalComponent(props) {
  const id = props.productID

  return (
      <ModalBody>
        <button onClick = {props.close}>x</button>
        <h2 id="simple-modal-title">Selecione a quantidade desejada</h2>
        <input type = "number" />
        <button onClick = {() => alert(id)} >Adicionar ao Carrinho</button>
    </ModalBody>
  )
}

export default ModalComponent



