import React, { useState, useEffect } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import APIURL from "../helpers/environment";

const DisplayHeight = (props) => {
  const handleSubmit = () => {

      fetch(`${APIURL}/plants/`, {
        method: 'Post',
        body: JSON.stringify({
            trefle_id: props.plant.id,
            common_name: props.plant.common_name,
            scientific_name: props.plant.scientific_name,
            image_url: props.plant.image_url
          },
        ),
        headers: new Headers({
          'Content-type': 'application/json',
          'Authorization': props.token
        }),
      })
        .then((res) => res.json())
        .then((logData) => {
          console.log(logData);
        });
      };

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

export default DisplayHeight;