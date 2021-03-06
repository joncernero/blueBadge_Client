import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  // min-height: 95vh;
  `

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

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 2.5rem;
    color: Green;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    color: gray;
    font-size: 1.5rem;
  }
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
  font-family: 'Poppins', sans-serif;
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
export const NavHeader = styled.div`
  display: grid;
  grid-template-columns: auto, auto, auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  z-index: 10;
  font-family: 'Poppin', sans-serif;
  font-weight: bolder;

  div {
    font-size: 2rem;
    color: green;
    text-decoration: none;
    font-weight: 600;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
  }

  li {
    list-style: none;
    margin: 0 10px;
    text-align: center;
  }

  li a {
    color: green;
    text-decoration: none;
    font-weight: 500px;
    letter-spacing: 1px;
  }

  li a:hover {
    color: gray;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    color: green;
  }
`
