import React, { useState, useEffect } from 'react';
import {
  CardColumns, CardDeck, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import DisplayPlants from "./DisplayPlants";


const SearchPlants = () => {

    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState();
    
    async function fetchPlants(){

      const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
      const baseurl = 'https://trefle.io/api/v1/plants?';
      const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
        const url = `${baseurl}${token}`;
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
      // localStorage.setItem("plants", plants)
        }, []
        );
        // if (loading && !plants) {
        //   return <div>loading</div>
        // };

        function displayCards(){
          return plants.length >0 ? plants.map((plant) => <DisplayPlants plant={plant} />) : null;
      }



    return (   

<div className="plantWrapper">

  {/* <button onClick={fetchPlants}>Find Your Favorite Plants!</button> */}
<CardDeck>
     {displayCards()}
     </CardDeck>  
</div>

     );
}
 
export default SearchPlants;

