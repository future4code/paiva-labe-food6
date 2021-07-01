

export const gotoHome = (history) => {
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
export const gotoCart = (history) => {
    history.push("/carrinho")
}
export const gotoProfile = (history) => {
    history.push("/perfil")
}
export const gotoRest = (history, id) => {
    history.push(`/restaurante/${id}`)
}
export const goToHomePage = (history) => {
    history.push(`/pagina-inicial`)
}
export const gotoBack = (history) => {
    history.back()
}

