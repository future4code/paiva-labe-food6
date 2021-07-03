import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: white;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display:grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`

export const Button = styled.button`
    background:none;
    outline:none;
    border: none;

    p{
        font-size: x-large;
    }

    :focus{
        background-color: #5cb646;
    }
`