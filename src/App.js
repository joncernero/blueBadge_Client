import "./App.css";
import styled from "styled-components";
import { Wrapper, Container } from "./components/styled/";
import Auth from "./components/Auth/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token"));
    setSessionToken(localStorage.getItem("token"));
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken();
  };

  // const protectedViews = () => {
  //   // let x = localStorage.getItem("token");
  //   return (sessionToken === localStorage.getItem('token') ? <Dashboard token={sessionToken}/> : <Auth updateToken={updateToken}/>);
  // };

  return (
    <div className="main">
      <Container>
        {!sessionToken ? <Auth updateToken={updateToken}/> : <Dashboard token={sessionToken} /> }
 {/* <Auth updateToken={updateToken}/> */}
        {/* {protectedViews()} */}
        <Navbar /> 
         {/* <Dashboard />  */}
      </Container>
    
    </div>
  );
  
}
export default App;
