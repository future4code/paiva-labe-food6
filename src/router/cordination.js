

export const gotoLoading = (history) => {
    history.push("/")
}
export const gotoLogin = (history) => {
    history.push("/login")
}
export const gotoRegister = (history) => {
    history.push("/registrar")
}
export const gotoAddress = (history) => {
    history.push("/registrar/endereco")
}
export const goToHome = (history) => {
    history.push("/pagina-inicial")
}
export const gotoCart = (history) => {
    history.push("/carrinho")
}
export const gotoProfile = (history) => {
    history.push("/perfil")
}
export const goToChangeAddress = (history) => {
    history.push("/perfil/atualizar-endereco")
} 
export const goToUpdateInfo = (history) => {
    history.push("/perfil/atualizar-info")
}

export const gotoRest = (history, id) => {
    history.push(`/restaurante/${id}`)
}


//export const gotoBack = (history) => {
  //  history.back()
//}

export const gotoBack = (history) => {
    history.goBack()
}

