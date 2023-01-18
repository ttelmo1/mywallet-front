import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
    height: 100vh;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #fff;

    }

    @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`
