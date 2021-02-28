import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlantTable from './PlantTable';
import CreatePlant from './CreatePlant';
import PlantEdit from './PlantEdit';


const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
    const [plantsToUpdate, setPlantsToUpdate] = useState({})
    const [updateActive, setUpdateActive] = useState(false); 

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
    }, [props.token])

    return (
        <Container>
            <h1>Search for a plant to get started!</h1>
            <Row>
                <Col md="3">
                    <CreatePlant fetchPlants={fetchPlants} token={props.token} />
                </Col>
                <Col md="12">
                    <PlantTable plants={plants} editPlants={editPlants} updateOn={updateOn} fetchPlants={fetchPlants} token={props.token}/>;
                </Col>
                {updateActive ? <PlantEdit plantsToUpdate={plantsToUpdate} updateOff={updateOff} token={props.token} fetchPlants={fetchPlants}/> : <></>}
            </Row>
        </Container>
    )
}

export default Dashboard;