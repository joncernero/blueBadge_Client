import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardDeck,
} from 'reactstrap';
import APIURL from '../helpers/environment';

const DisplayUserPlants = (props) => {
  const handleSubmit = () => {
    fetch(`${APIURL}/plants/`, {
      method: 'Post',
      body: JSON.stringify({
        trefle_id: props.plant.id,
        common_name: props.plant.common_name,
        scientific_name: props.plant.scientific_name,
        image_url: props.plant.image_url,
      }),
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
      });
  };
  function imageHandling(event) {
    event.preventDefault();
    event.target.src =
      'https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
  }
  return (
    <div>
      <div>
        <Card id='plantCard'>
          <CardImg
            key={props.plant.image_url}
            id='plantImg'
            className='plantImg'
            top
            width='100%'
            src={props.plant.image_url}
            alt='Image not available'
            onError={imageHandling}
          />

          <CardBody id='plantBody'>
            <Button id='plantButton' size='sm' onClick={handleSubmit}>
              +
            </Button>
            <CardTitle key={props.plant.image_url}>
              Common Name: {props.plant.common_name}
            </CardTitle>
            <CardSubtitle key={props.plant.image_url}>
              Scientific Name: {props.plant.scientific_name}
            </CardSubtitle>
            <CardText></CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DisplayUserPlants;
