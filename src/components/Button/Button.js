import styled from 'styled-components';

export const Button = styled.button`

@media(max-width: 600px) {

    padding: 8px;
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    line-height: normal;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-decoration: none;
    letter-spacing: 0.08em;
    position: relative;
    transition: background-color 0.6s ease;
    overflow: hidden;
    cursor: pointer;
    border: none;
    color: #000;
    width: 100%;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
}

`