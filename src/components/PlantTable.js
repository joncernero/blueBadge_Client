import React, { useState } from 'react';
import APIURL from "../helpers/environment";
import {Table, CardDeck, CardBody, CardTitle, CardSubtitle, CardText, Button, Card, CardImg} from 'reactstrap';


const PlantTable = (props) => {

    const deletePlants = (plants) => {
        fetch(`${APIURL}/plants/${plants.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPlants())
    }



    const plantMapper = () => {
        return props.plants.map((plants, index) => {
            return(
        <CardDeck>
        <Card id="plantCard">
        <CardImg id="plantImg" className="plantImg" top width="100%" src={plants.image_url} alt="AlternateImage" id="AlternateImage" />
        
        <CardBody id="plantBody">
          <CardTitle>{plants.common_name}</CardTitle>
          <CardSubtitle>{plants.scientific_name}</CardSubtitle>
          <CardText>{plants.notes}</CardText>
          <Button color ="danger" onClick={() => {deletePlants(plants)}}>Kill Plant</Button>
          <Button color="warning" onClick={() => {props.editPlants(plants); props.updateOn()}}>Add/Edit Notes</Button>
        </CardBody> 
        </Card>
        </CardDeck>
              
            )
        })
    }

    return ( 
        <>

{plantMapper()}

        </>
     );
}

export default PlantTable;
