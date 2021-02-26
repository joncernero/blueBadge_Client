import "./App.css";
import styled from "styled-components";
import { Wrapper, Container } from "./components/styled/";
import Auth from "./components/Auth";
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SearchPlants from "./components/SearchPlants"

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

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken();
  // };

const protectedViews = () => {
    return (
      sessionToken === localStorage.getItem('token') ? <SearchPlants token={sessionToken}/> : <Auth updateToken={updateToken}/>
    )
  }
 

  return (
    <div className="main">
      <Container>
        <Auth />
        {protectedViews()}
        <Navbar />
        <Dashboard />
      </Container>
    
    </div>
  );
  
}
export default App;
