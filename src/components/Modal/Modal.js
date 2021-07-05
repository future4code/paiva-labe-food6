import React, { useContext, useState } from "react"
import { GlobalStateContext } from "../../globalstate/GlobalStateContext"
import OptionQntd from "../FileInput/OptionQnt"
import { CloseButton, ContentModal, ModalBody, SelectModal,CloseArea,BuyButton } from "./styled"

function ModalComponent(props) {
  const {makeCart} = useContext(GlobalStateContext)
  const [qntd, setQntd] = useState(1)

  const handleQntd = (event) => {
    setQntd(event.target.value)
  }
  

  return (
      <ModalBody>

        <CloseArea>
          <CloseButton onClick = {props.close}>x</CloseButton>
        </CloseArea>

        <ContentModal>
          <h2 id="simple-modal-title">Selecione a quantidade desejada</h2>
          <SelectModal onChange = {handleQntd}>
            <OptionQntd/>
          </SelectModal>
          <BuyButton onClick = {() => {makeCart(props.product,qntd,props.resID)}} >Adicionar ao Carrinho</BuyButton>
        </ContentModal>

    </ModalBody>
  )
}

export default ModalComponent



