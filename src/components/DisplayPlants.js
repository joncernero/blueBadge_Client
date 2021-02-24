import React, { useState, useEffect } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardDeck
  } from 'reactstrap';
  import CreatePlant from "./CreatePlant";


const DisplayPlants = (props) => {

    return ( 
      <div>
<div>
  
      <Card id="plantCard">
        <CardImg key={props.plant.image_url} id="plantImg" className="plantImg" top width="100%" src={props.plant.image_url} alt="Image not available" />
        
        <CardBody id="plantBody">
        <Button id="plantButton" size="sm">+</Button>
          <CardTitle key={props.plant.image_url}>{props.plant.common_name}</CardTitle>
          <CardSubtitle key={props.plant.image_url}>{props.plant.scientific_name}</CardSubtitle>
          <CardText></CardText>

        </CardBody>
        
      </Card>
      
      </div>
<div>
      
    </div>
    
    </div>
     );
     
}
 
export default DisplayPlants;