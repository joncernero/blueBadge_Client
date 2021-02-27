import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlantTable from './PlantTable';
import CreatePlant from './CreatePlant';
import PlantEdit from './PlantEdit';


const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
    console.log(props.token)
    
    const fetchPlants = () => {
        if(props.token === ""
        ){
            return
        }
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
    }, [props.token])

    return (
        <Container>
            <h1>Search for a plant to get started!</h1>
            <Row>
                <Col md="3">
                    <CreatePlant fetchPlants={fetchPlants} token={props.token} />
                </Col>
                <Col md="12">
                    <h2>View my garden below...</h2> 
                    <PlantTable plants={plants} fetchPlants={fetchPlants} token={props.token}/>;
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;