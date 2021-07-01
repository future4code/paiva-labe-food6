

export const gotoHome=(history)=>{
    history.push("/")
}
export const gotoLogin=(history)=>{
    history.push("/login")
}
export const gotoRegister=(history)=>{
    history.push("/register")
}
export const gotoAddress=(history)=>{
    history.push("/register/address")
}
export const gotoCart=(history)=>{
    history.push("/carrinho")
}
export const gotoProfile=(history)=>{
    history.push("/profile")
}
export const gotoRest=(history, id)=>{
    history.push(`/restaurant/${id}`)
}
export const gotoBack=(history)=>{
    history.back()
}

