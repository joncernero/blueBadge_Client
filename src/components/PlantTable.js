import React from 'react';
import {Table, CardBody, CardTitle, CardSubtitle, CardText, Button, Card, CardImg} from 'reactstrap';

const PlantTable = (props) => {

    const deletePlants = (plants) => {
        fetch(`http://localhost:3000/plants/${plants.id}`, {
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
                <tr key={index}>
                    <th scope="row">{plants.id}</th>
                    <td>{plants.trefle_id}</td>
                    <td>{plants.common_name}</td>
                    <td>{plants.scientific_name}</td>
                    <td>{plants.image_url}</td>
                    <td>{plants.notes}</td>
                    <td>
                        <Button color ="danger" onClick={() => {deletePlants(plants)}}>Kill Plant</Button>
                        <br/>
                        <br/>
                        <Button color="warning" onClick={() => {props.editPlants(plants); props.updateOn()}}>Add/Edit Notes</Button>
                        
                    </td>
                </tr>
            )
        })
    }

    return ( 
        <>
            <h3>My Garden</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Trefle ID</th>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Image</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {plantMapper()}
                </tbody>
            </Table>
        </>
     );
}

export default PlantTable;
