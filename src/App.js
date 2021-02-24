import React, { useState, useEffect } from 'react';
import './App.css';
// import CreatePlant from './components/CreatePlant';
// import PlantEdit from './components/PlantEditg';


function App() {  
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token'));
    setSessionToken(localStorage.getItem('token'));
  }, []);

  const updateToken = (newToken) => {
localStorage.setItem('token', newToken);
setSessionToken(newToken);
console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken();
  };

  const protectedViews = () => {
let x = localStorage.getItem('token')

return sessionToken ? (<p>Person has token</p>) : (<p> no token</p>);

// return sessionToken ? (<CreatePlant token={sessionToken}/>) : (<p>no token</
  // return sessionToken ? (<PlantEdit token={sessionToken}/>) : (<p>no token</p>)  
  }
  console.log(sessionToken);
  return (
    <div> 
      {protectedViews()}
    </div>
  );
  
}

export default App;
