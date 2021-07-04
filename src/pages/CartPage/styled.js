import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

export const CartArea = styled.div`
  width: 100vw;
`

export const PriceArea = styled.div`
  padding:1rem;

  display:flex;
  flex-direction: column;
  text-align: right;
`

export const TotalValor = styled.div`
  display:flex;
  justify-content: space-between;
`

export const PageCart = styled.div` 
@media(max-width: 600px) {
    padding:1rem;
    

    h5{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight:normal;
      font-size: 16px;
      color: black;
    }    

}
`
export const MainEndereco = styled.div` 
@media(max-width: 600px) {
    height: 85px;
    width: 100%;
    background-color: #eeeeee;
    padding: 16px;
    margin: 10px 0 8px;
    margin-top: 30px; 

}
   
    
`
export const DivTituloEndereco = styled.div` 
    height: 20px;
    width: 100%;    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 18px;
    margin: 0 0 8px;
    line-height: normal;
    letter-spacing: -0.39px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;     
    color: #b8b8b8;            
      
  
`

export const DivEndereco = styled.div` 
  width: 100%;
  height: 18px;
  margin: 8px 0 0;   
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;      
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black)    
   
 `


export const MainContainer = styled.div` 
@media(max-width: 600px) {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  

  h5 {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:normal;
  font-size: 16px;
  color: black;
  }
  
} 
 `

export const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: 'black',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'black',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 25%,transparent 2%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'black',
    },
  },
});

export const FormaPag = styled.div` 
  width: 100%;
  height: 18px;
  margin: 24px 16px 8px;
  margin-left: -1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: normal;    
`

export const DivHr = styled.div` 
border: solid 1px black;

`

export const DivCartBody = styled.div` 
width: 360px;
height: 20vh;
margin: 8px 0 33px;
padding: 12px 32px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`

export const DivTituloCart = styled.div` 
display: flex;
justify-content: center;
align-items: center;
`

export const DivFrete = styled.div` 
  display: flex;
  justify-content: flex-end;
  width: 320px;
  height: 49px;
  margin-top:30px;
  
`
export const DivContainerValor = styled.div` 
display: flex;
justify-content: space-between;
width: 320px;
`
export const DivSubTotal = styled.div` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  height: 49px;
  margin-left: -25px;
  
`

export const DivValorTotal = styled.div` 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  height: 49px;
  color: green;
  font-weight: bold;
  font-size: 20px;  
   
`
export const FooterContainer = styled.div` 
display: flex;
justify-content: center;
align-items: center;
width: 374px;
border-top: gray 1px solid;
margin-top: 20px;
position: fixed;

`

export const DivHome = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 27px;
  margin-top: 10px;
  object-fit: contain;
  
  
`
export const DivCart = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 29px;
  margin-top: 10px;
  object-fit: contain;
  
`

export const DivPerfil = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  margin-top: 10px;
  object-fit: contain; 
   
`

