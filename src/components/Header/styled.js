import styled from 'styled-components'

export const Head = styled.div`
@media(max-width: 600px) {
  width: 10.938rem;
  height: 2.75rem;
  margin: 1.25rem 5.75rem 0 3.373rem;
  padding: 0.813rem 4.125rem 0.75rem;
  display: grid;
  grid-template-columns: 10% 90%;
  padding: 0;
  background-color: #ffffff;
  margin: 0;
  width: 100vw;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
  display: flex;
  top:0;
  .Back {
    grid-column: 1/2;
    width: 1.44rem;
    height: 1.5rem;
    margin: 0.625rem 3.373rem 0.625rem 1rem;
    object-fit: contain;
  }
  .title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    grid-column:2/3;
    margin: auto 1rem;
    width: 5.688rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
  }
  .zero{
    grid-column:1/2;
    width:25vw;
  }
`