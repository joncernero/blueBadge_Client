import React, { useState, useEffect } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';


const DisplayPlants = (props) => {

    return ( 

      <Card id="plantCard">
        <CardImg id="plantImg" className="plantImg" top width="100%" src={props.plant.image_url} alt="Card image cap" />
        
        <CardBody id="plantBody">
        <Button id="plantButton"></Button>
          <CardTitle>{props.plant.common_name}</CardTitle>
          <CardSubtitle>{props.plant.scientific_name}</CardSubtitle>
          <CardText></CardText>
        
          
        </CardBody>
        
      </Card>
       
     );
     
}
 
export default DisplayPlants;