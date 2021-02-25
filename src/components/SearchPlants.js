import React, { useState, useEffect } from 'react';
import {
  CardColumns, CardDeck, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import DisplayPlants from "./DisplayPlants";
import {Link} from "react-router-dom";


const SearchPlants = (props) => {

    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState();
    const [page, setPage] = useState(1);
    
    async function fetchPlants(){

      const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
      const baseurl = 'https://trefle.io/api/v1/plants?';
      const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
      const pageurl = `&page=${page}`
        const url = `${baseurl}${token}${pageurl}&order[common_name]=asc`;
        console.log(url);
        await fetch(corsURL + url)
        .then(response => response.json())
        .then(data => {
          setPlants(data.data);
          console.log(plants);
        })
      }
      
        useEffect(() => {
      fetchPlants();
     
        }, []
        );
       

const handlePage = (event) => {
  setPage(0);
  fetchPlants();
  event.preventDefault();
}

const changePage = (event, direction) => {
  event.preventDefault()
  if(direction === 'down'){
    if(page > 0){
      setPage(page -1);
      fetchPlants();
    }
  }

  if(direction === 'up'){
    setPage(page + 1);
    fetchPlants();
  }
};



        function displayCards(){
          return plants.length >0 ? plants.map((plant) => <DisplayPlants plant={plant} token={props.token}/>) : null;
      }



    return (   

<div>
<div>
     <button onClick={(e) => changePage(e, 'down')}>Previous Plants</button>
      <button onClick={(e) => changePage(e, 'up')}>Show More Plants</button>   
      
</div>
  <div>

  
<CardDeck>
     {displayCards()}
     </CardDeck> 
     </div>
     
</div>

     );
}
 
export default SearchPlants;