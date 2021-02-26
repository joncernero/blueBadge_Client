import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CreatePlant from './CreatePlant'

const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
 
    const fetchPlants = () => {
        fetch('http://localhost:3000/plants/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        }) .then( (res) => res.json())
        .then((plantData) => {
            setPlants(plantData)
            console.log(plantData)
        })
    };

    useEffect(() => {
        fetchPlants();
    }, [])

    return (
        <Container>
            <h1>Search for a plant to get started!</h1>
            <Row>
                <Col md="3">
                   <CreatePlant token={props.token} /> 
                </Col>
                <Col md="9">
                    <h2>View my garden below...</h2> 
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;