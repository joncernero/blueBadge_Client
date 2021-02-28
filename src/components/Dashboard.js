import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom';
import Sidebar from "./Sidebar";



const Dashboard = (props) => {

    const [plants, setPlants] = useState([]);
    // const [user, setUser] = useState('');
    console.log(props.token)
    
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

    // function getUser(){
    //     const user = JSON.parse(localStorage.getItem('user'));
    // }

    useEffect(() => {
        fetchPlants();
        // getUser();
    }, [])

    return (
        <div>
        
              <div>
        <Container>
            {/* <h1>Welcome, {user.firstName}</h1> */}
            <Row>
                <Col md="3">
                    <h1> Add Create plant component here</h1>
                </Col>
                <Col md="9">
                    <h2>View my garden below...</h2> 
                </Col>
            </Row>
        </Container>
       </div>
            <BrowserRouter>
            <Navbar token={props.token}/>
            </BrowserRouter>
         
            <div>           
            </div>
          
        </div>
    )
}

export default Dashboard;