import "./App.css";
import styled from "styled-components";
import { Wrapper, Container } from "./components/styled/";
import Auth from "./components/Auth/index";
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function iPlants() {
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

  const protectedViews = () => {
    let x = localStorage.getItem("token");

    return sessionToken ? <p>Person has token</p> : <p> no token</p>;
  };
  console.log(sessionToken);





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
export default iPlants;
