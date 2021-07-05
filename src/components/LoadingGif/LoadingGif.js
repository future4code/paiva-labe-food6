import React from 'react';
import gif from '../../Assets/loading-unscreen.gif';
import styled from 'styled-components';

const GifContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

img {
    width: 100%;
}
`


export default function LoadingGif() {
    return (
        <GifContainer>
            <img src={gif} alt="Carregando" />
        </GifContainer>
    )
}
