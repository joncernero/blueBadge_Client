import React, { useState, useEffect } from 'react';
import { Container } from '../components/styled';
import {
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardDeck
} from 'reactstrap';
import APIURL from '../helpers/environment';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';
import UserSearchPlants from './UserSearchPlants';
import SearchPlants from './SearchPlants';
import PlantIndex from './PlantIndex';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = (props) => {
  const [plants, setPlants] = useState([]);
  const [plantsToUpdate, setPlantsToUpdate] = useState({});
  const [updateActive, setUpdateActive] = useState(false);

  const fetchPlants = () => {
    if (props.token === '') {
      return;
    }

    fetch(`${APIURL}/plants/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    })
      .then((res) => res.json())
      .then((plantData) => {
        setPlants(plantData);
        console.log(plantData);
      });
  };

  const editPlants = (plants) => {
    setPlantsToUpdate(plants);
    console.log(plants);
  };

  const toggleModal = () => {
    setUpdateActive(!updateActive);
  };

  useEffect(() => {
    fetchPlants();
  }, [props.token]);

  return (
    <Container>
      <h1>Welcome, {props.userName}</h1>
      <Row>
        <Col md='12'>
          <PlantTable
            plants={plants}
            editPlants={editPlants}
            toggleModal={toggleModal}
            fetchPlants={fetchPlants}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <PlantEdit
            plantsToUpdate={plantsToUpdate}
            toggleModal={toggleModal}
            updateActive={updateActive}
            token={props.token}
            fetchPlants={fetchPlants}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};
export default Dashboard;
