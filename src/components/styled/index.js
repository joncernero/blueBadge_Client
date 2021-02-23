import styled from 'styled-components'

export const Wrapper = styled.section``
export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 25px;
  width: 93vw;
  height: 80vh;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
export const Col = styled.div``

export const TitleCol = styled.div`
  flex: ${props => props.size};
  text-align: center;
  justify-content: center;
  text-align: center;
  width: 50vw;
`
export const LoginCol = styled.div`
  align-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 50vw;
  height: 75vh;
  padding: 20px;
  box-shadow: 0 0.5rem 1.5 rgba(0, 0, 0.2);
  border-radius: 10px;
`
export const Card = styled.div``
export const Thumbnail = styled.div``
export const Button = styled.button`
  height: 35px;
  width: 125px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: ${props => (props.primary ? 'green' : 'gray')};
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 0.5rem 1.5 rgba(0, 0, 0.2);
`
