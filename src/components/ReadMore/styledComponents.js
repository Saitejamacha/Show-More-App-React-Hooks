import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const TextCon = styled(AppContainer)`
  width: 90vw;
  height: 80vh;
  //   background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  @media (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
`

export const Image = styled.img`
  width: 80vw;
  height: 30vh;
  @media (min-width: 768px) {
    width: 50vw;
    height: 50vh;
  }
`
export const Heading = styled.h1`
  font-size: 25px;
  font-family: Roboto;
  //   background-color: aqua;
  margin-bottom: -5px;
`

export const Description = styled.p`
  width: 75vw;
  font-size: 15px;
  font-family: Roboto;
  //   background-color: red;
  @media (min-width: 768px) {
    width: 48vw;
    font-size: 15px;
  }
`
export const Button = styled.button`
  width: 110px;
  height: 40px;
  color: white;
  background-color: #1f81ff;
  border: 0px;
  border-radius: 10px;
`
