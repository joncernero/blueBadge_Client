import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: repeat(2, 6fr);
  justify-content: center;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  min-height: 95vh;
`;
export const TitleContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 2.5rem;
    color: Green;

    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    color: gray;
    font-size: 1.5rem;

    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }
`;
export const LoginContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5px;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-height: 85vh;
  font-family: 'Poppins', sans-serif;

  h1 {
    @media only screen and (max-width: 480px) {
      text-align: center;
    }
  }
`;
export const Card = styled.div`
  background-color: white;
  padding: 10px;
  margin: 5px;
`;
export const Button = styled.button`
  height: 35px;
  width: 125px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: ${(props) => (props.primary ? 'green' : 'gray')};
  border-radius: 5px;
  margin: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
//Form, FormGroup, Label, Input

export const Form = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(autofit, minmax(400px, 3fr));
  grid-template-rows: repeat(4, 4fr);
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 5px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Label = styled.label`
  grid-column: 1 / 2;
  font-size: 1.5rem;
  /* display: inline-block; */
`;
export const Input = styled.input`
  grid-column: 2 / 3;
  width: 200px;
  height: 35px;
  padding: 10px;
`;
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
`;
