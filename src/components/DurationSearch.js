import React, { useState, useEffect } from 'react';
import {
  CardColumns,
  CardDeck,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Tooltip,
  Container
} from 'reactstrap';
import { Button } from '../components/styled';
import DisplayDuration from './DisplayDuration';
import { Link } from 'react-router-dom';

const SearchDuration = (props) => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [plantDuration, setPlantDuration] = useState();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen); 


  function fetchFlowers() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl =
      'https://trefle.io/api/v1/species?';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const duration = `&filter[duration]=${plantDuration}`;
    const pageurl = `&page=${page}`;
    const url = `${baseurl}${token}${pageurl}${duration}&filter_not[image_url]=null&order[common_name]=asc`;
    console.log(url);
    fetch(corsURL + url)
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.data);
        console.log(plants);
        console.log(url);
      });
  }

  useEffect(() => {
    fetchFlowers();
  }, []);

  const handleSubmit = (event) => {
    setPage(1);
    fetchFlowers();
  };

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 0) {
        setPage(page - 1);
        fetchFlowers();
      }
    }

    if (direction === 'up') {
      setPage(page + 1);
      fetchFlowers();
    }
  };

  function displayCards() {
    return plants.length > 0
      ? plants.map((plant) => (
          <DisplayDuration plant={plant} token={props.token} />
        ))
      : null;
  }

  return (
    <div className="plantComponents">
      <br />
      <hr />
      <h6>Plants are listed alphabetically by the plant's common name.  Click the "+" button on a plant to add it to your garden.  Once a plant is in your garden, you can add your own personal notes regarding each specific plant.</h6>
      <hr />
      <br />
      <div>
        <span className="searchTitle">Search by the Plant's Duration:</span>
        <br />
        <Tooltip placement="top" isOpen={tooltipOpen} target="input" toggle={toggle}>Annual, perennial, or biennial</Tooltip>
        <input
          type='text'
          name='flowersearch'
          onChange={(e) => setPlantDuration(e.target.value)}
        />
        <Button primary type='submit' onClick={(e) => handleSubmit()}>
          Search
        </Button>
        <Container>
          <br />
        <CardDeck>{displayCards()}</CardDeck>
        </Container>
      </div>
      <div>
      <br />
      {plants.length >0 ? null : <p className="plantSearch">plants will display here after you click 'Search'</p>}
        <Button onClick={(e) => changePage(e, 'down')}>Previous</Button>
        <Button onClick={(e) => changePage(e, 'up')}>Show More</Button>
      </div>
    </div>
  );
};

export default SearchDuration;
