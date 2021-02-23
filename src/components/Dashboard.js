import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlantEdit from './PlantEdit';
import PlantTable from './PlantTable';


const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [plantsToUpdate, setPlantsToUpdate] = ({});

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

    const editPlants = (plants) => {
        setPlantsToUpdate(plants);
        console.log(plants);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchPlants();
    }, [])

    return (
        <Container>
            <h1>Search for a plant to get started!</h1>
            <Row>
                <Col md="3">
                    <h1> Add Create plant component here</h1>
                </Col>
                <Col md="9">
                    <h2>View my garden below...</h2> 
                    <PlantTable />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;