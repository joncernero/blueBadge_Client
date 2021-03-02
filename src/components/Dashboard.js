import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardDeck} from 'reactstrap';
import APIURL from "../helpers/environment";
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import UserSearchPlants from "./UserSearchPlants";
import SearchPlants from "./SearchPlants";
import PlantIndex from "./PlantIndex";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./Navbar";

const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
    const [plantsToUpdate, setPlantsToUpdate] = useState({})
    const [updateActive, setUpdateActive] = useState(false); 
    const userName = localStorage.userData;

//     var x = sessionStorage.test1;
    console.log(props.token)
    
    const fetchPlants = () => {
        if(props.token === ""
        ){
            return
        }

        fetch(`${APIURL}/plants/`, {
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

    const toggleModal = () => {
        setUpdateActive(!updateActive)
    }

    useEffect(() => {
        fetchPlants();
    }, [props.token])

    return (
// <<<<<<< jessicatest
//     <div>
//       <h1>Welcome, {userName}</h1>
//       <BrowserRouter>
//       <PlantIndex token={props.token}/>
//       </BrowserRouter>
//     <div>
//         <hr />
//         <h1>My Garden</h1>
//         <hr />
//     </div>
      
//     <div>
//         <Container id="plantTable">    
//             <PlantTable plants={plants} editPlants={editPlants} updateOn={updateOn} fetchPlants={fetchPlants} token={props.token}/>;
                
//             {updateActive ? <PlantEdit plantsToUpdate={plantsToUpdate} updateOff={updateOff} token={props.token} fetchPlants={fetchPlants}/> : <></>}
<div>
        <Container>
            {/* <h1>Welcome, {user.firstName}</h1> */}
            <Row>
                <Col md="12">
                    <PlantTable plants={plants} editPlants={editPlants} toggleModal={toggleModal} fetchPlants={fetchPlants} token={props.token}/>;
                </Col>
                {updateActive ? <PlantEdit plantsToUpdate={plantsToUpdate} toggleModal={toggleModal} updateActive={updateActive} token={props.token} fetchPlants={fetchPlants}/> : <></>}
            </Row>
        </Container>
      
            <BrowserRouter>
            <Navbar token={props.token}/>
            </BrowserRouter>
         
          
        </div>
    )
}

export default Dashboard;