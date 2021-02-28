import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: repeat(4, 1fr);
  justify-content: center;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  min-height: 95vh;
`
export const TitleContainer = styled.div`
  grid-column: 1 / 7;
  display: grid;
  justify-content: center;
  align-content: center;
`
export const LoginContainer = styled.div`
  grid-column: 7 / -1;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5px;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-height: 85vh;
`
export const Card = styled.div`
  background-color: white;
  padding: 10px;
  margin: 5px;
`
export const Thumbnail = styled.img``
export const Button = styled.button`
  height: 35px;
  width: 125px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: ${props => (props.primary ? 'green' : 'gray')};
  border-radius: 5px;
  margin: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
//Form, FormGroup, Label, Input

export const Form = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
`

export const FormGroup = styled.div``
export const Label = styled.label`
  font-size: 25px;
  width: 10vw;
  /* display: inline-block; */
  margin: 5px;
`
export const Input = styled.input``
export const TopNav = styled.div`
  display: flex;
`
