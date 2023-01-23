import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8C11BE;
  height: 100vh;
  padding-left: 25px;
  padding-right: 25px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    color: #FFFFFF;
    font-size: 26px;
    font-weight: 700;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }


`

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  width: 100%;
  height: 65%;
  border-radius: 5px;
  margin-top: 45px;

  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #868686;
    text-align: center;
  }

  
`

export const PurpleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #A328D6;
  border-radius: 5px;
  margin-top: 10px;
  width: 47%;
  height: 100px;
  padding-left: 10px;
  font-size: 22px;
  font-family: 'Raleway', sans-serif;

  
  color: #FFFFFF;
  text-align: start;
  h2{
    width: 30%;
    font-size: 17px;
    font-weight: 700;
  }
`
