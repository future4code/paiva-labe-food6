import styled from 'styled-components'

export const Main = styled.main`
display:flex;
justify-content:center;
text-align:center;
width:80vw;
margin:auto;
height:100vh;
border-radius: 10px;
`
export const FormContainer = styled.div` 
   display:flex;
    flex-direction: column;    
    margin:auto;  
    width:100vw;
  
  
form{

    margin:10px;
}
    input{
        width:90vw;
        padding:2%;  
        margin:10px;
    }
    img{
        height:10vh;
    }

`
export const Button = styled.button`
    padding: 2%; 
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    line-height: normal;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-decoration: none;
    letter-spacing: 0.08em;
    transition: background-color 0.6s ease;
    overflow: hidden;
    cursor: pointer;
    border: none;
    color: #000;
    width: 100%;
    font-size: 16px;
    font-family: Roboto;
    background:  rgba(92, 182, 70, 50);
    letter-spacing: -0.39px;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transform-style: flat;
      transform: translate3d(-50%, -50%, 0);
      background: rgba(white, 0.1);
      border-radius: 100%;
      transition: width 0.3s ease, height 0.3s ease;
    }
    &:focus,
    &:hover {
      background: rgba(92, 182, 70, 30);
    }
    &:active {
      &:after {
        width: 100%;
        height: 150px;
      }
    }

`