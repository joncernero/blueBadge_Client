
import React, { useState } from 'react'
import APIURL from '../helpers/environment'
import {
  Table,
  CardDeck,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
  CardImg,
  Container,
  CardColumns
} from "reactstrap";

const PlantTable = props => {
  const deletePlants = plants => {
    fetch(`${APIURL}/plants/${plants.id}`, {
      method: "DELETE",
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    }).then(() => props.fetchPlants())
  }

  const plantMapper = () => {
    return props.plants.map((plants, index) => {
      return (
       

        
          <Card id="gardenCard">
            <CardImg
              id='gardenImg'
              className='plantImg'
              top
              width='100%'
              src={plants.image_url}
              alt='Image not available'
            />

            <CardBody id='gardenBody'>
              <CardTitle>{plants.common_name}</CardTitle>
              <p className="plantSubtitle">Scientific Name:</p>
              <CardSubtitle className="plantSubtitle">{plants.scientific_name}</CardSubtitle>
              <hr/>
              <p className="gardenNotes">My Notes:</p>
              <CardText className="gardenNotes">{plants.notes}</CardText>
              <br />
              <Button
                color='danger'
                onClick={() => {
                  deletePlants(plants)
                }}>
                Kill Plant!
              </Button>
              <Button
                color='warning'
                onClick={() => {
                  // window.location.reload(true)
                  props.editPlants(plants)
                  props.toggleModal()
                }}>
                Add/Edit Notes
              </Button>
            </CardBody>
          </Card>
     
        
      )
    })
  }
  
  return (
      <CardDeck>
      {plantMapper()}
      </CardDeck>
  )
}


export default PlantTable
