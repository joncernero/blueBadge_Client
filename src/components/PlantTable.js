
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
  Alert
} from "reactstrap";

const PlantTable = (props) => {
  const deletePlants = plants => {
    fetch(`${APIURL}/plants/${plants.id}`, {
      method: "DELETE",
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    })
    .then(() => props.fetchPlants())
    .then((plantData) => {
      alert('Plant deleted!');
    })
  }

  const plantMapper = () => {

    return props.plants.map((plants, index) => {
      return (
        // <tr key={index}>
        //     <th scope="row">{plants.id}</th>
        //     <td>{plants.trefle_id}</td>
        //     <td>{plants.common_name}</td>
        //     <td>{plants.scientific_name}</td>
        //     <td>{plants.image_url}</td>
        //     <td>{plants.notes}</td>
        //     <td>
        //         <Button color ="danger" onClick={() => {deletePlants(plants)}}>Kill Plant!</Button>
        //         <br/>
        //         <br/>
        //         <Button color="warning" onClick={() => {props.editPlants(plants); props.toggleModal()}}>Add/Edit Notes</Button>

        //     </td>
        // </tr>

        <CardDeck>
          <Card id="plantCard">
            <CardImg
              id='plantImg'
              className='plantImg'
              top
              width='100%'
              src={plants.image_url}
              alt='AlternateImage'
              id='AlternateImage'
            />

            <CardBody id='plantBody'>
              <CardTitle>{plants.common_name}</CardTitle>
              <CardSubtitle>{plants.scientific_name}</CardSubtitle>
              <CardText>{plants.notes}</CardText>
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
        </CardDeck>
      )
    })
  }
  
  return (
    <>
      <h3>My Garden:</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            {/* <th>#</th>
                        <th>Trefle ID</th>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Image</th>
                        <th>Notes</th> */}
          </tr>
        </thead>
        <tbody>{plantMapper()}</tbody>
      </Table>
    </>
  )
}


export default PlantTable
