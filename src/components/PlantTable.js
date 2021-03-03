<<<<<<< HEAD
import React, { useState } from "react";
import APIURL from "../helpers/environment";
=======
import React, { useState } from 'react'
import APIURL from '../helpers/environment'
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7
import {
  Table,
  CardDeck,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
<<<<<<< HEAD
  CardImg,
} from "reactstrap";
=======
  CardImg
} from 'reactstrap'
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7

const PlantTable = props => {
  const deletePlants = plants => {
    fetch(`${APIURL}/plants/${plants.id}`, {
      method: "DELETE",
      headers: new Headers({
<<<<<<< HEAD
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchPlants());
  };
=======
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    }).then(() => props.fetchPlants())
  }
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7

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
<<<<<<< HEAD
          <Card id="plantCard">
            <CardImg
              id="plantImg"
              className="plantImg"
              top
              width="100%"
              src={plants.image_url}
              alt="AlternateImage"
              id="AlternateImage"
            />

            <CardBody id="plantBody">
              <CardTitle>{plants.common_name}</CardTitle>
              <CardSubtitle>{plants.scientific_name}</CardSubtitle>
              <CardText>{plants.notes}</CardText>
              <Button
                color="danger"
                onClick={() => {
                  deletePlants(plants);
                }}
              >
                Kill Plant!
              </Button>
              <Button
                color="warning"
                onClick={() => {
                  props.editPlants(plants);
                  props.toggleModal();
                }}
              >
                Add/Edit Notes
              </Button>
            </CardBody>
          </Card>
        </CardDeck>
      );
    });
  };

=======
          <Card id='plantCard'>
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
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7
  return (
    <>
      <h3>My Garden</h3>
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
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> 55c9f9dba5b2022defe0daa1472ba407016976d7

export default PlantTable
