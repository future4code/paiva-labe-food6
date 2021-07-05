import styled from "styled-components"
export const Container = styled.body`
display:flex;
flex-wrap:wrap;
`

export const CardRest = styled.div`
display:flex;
flex-direction:column;
margin-top:10px;
border-radius: 20px;
box-shadow: 1px 2px 1px;
img{
    align-items:center;
    width: 80%;
    border-radius: 20px;
}
div{
    display:flex;
    justify-content: space-around;
}
`
export const PageHomeInitial= styled.div` 
@media(max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
    background-color: black ;
    width: auto;
    height: 100vh;

    img {
        
        width: 43%;
        height:16%;
    }

}
` 
export const Filter = styled.div`
display: flex;
overflow-y: auto;

p {
    padding: 5px;
    margin: 0 1px;
    font-size: 1.2rem;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    :hover {
        color:#5cb646;
    }

    :visited{
        color:#5cb646;
    }
}
`
