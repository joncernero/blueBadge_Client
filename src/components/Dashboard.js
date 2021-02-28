import React, { useState, useEffect } from 'react'
// import {Container, Row, Col} from 'reactstrap';
import { Container, Row } from '../components/styled'

const Dashboard = props => {
  const [plants, setPlants] = useState([])
  console.log(props.token)

  const fetchPlants = () => {
    fetch('http://localhost:3000/plants/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(plantData => {
        setPlants(plantData)
        console.log(plantData)
      })
  }

  useEffect(() => {
    fetchPlants()
  }, [])

  return (
    <Container>
      <h1>Search for a plant to get started!</h1>
      <div>
        <h1> Add Create plant component here</h1>
        <h2>View my garden below...</h2>
      </div>
    </Container>
  )
}

export default Dashboard
