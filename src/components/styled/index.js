import styled from 'styled-components'

export const Wrapper = styled.section``
export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 25px;
  width: 93vw;
  height: 85vh;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
export const Row = styled.div`
  display: flex;
`
export const Col = styled.div``

export const TitleCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50vw;
  font-size: 50px;
  letter-spacing: -1;
  color: green;
`
export const LoginCol = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 50vw;
  height: 79vh;
  padding: 20px;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
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
  display: flex;
  flex-direction: column;
  justify-items: center;
`

export const FormGroup = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
`
export const Label = styled.label`
  font-size: 25px;
  width: 240px;
  /* display: inline-block; */
  margin: 5px;
`
export const Input = styled.input`
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px;
`
