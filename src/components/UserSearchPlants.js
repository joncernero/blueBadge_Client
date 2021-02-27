import React, { useState, useEffect } from 'react';
import {
  CardColumns,
  CardDeck,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import DisplayUserPlants from './DisplayUserPlants';
import { Link } from 'react-router-dom';

const UserSearchPlants = (props) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const [plantSelector, setPlantSelector] = useState();

  function fetchPlants() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl = 'https://trefle.io/api/v1/plants/search?';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const selector = `&q=${plantSelector}`;
    const pageurl = `&page=${page}`;
    const url = `${baseurl}${token}${selector}${pageurl}&order[common_name]=asc`;
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
    fetchPlants();
  }, []);

  const handleSubmit = (event) => {
    setPage(1);
    fetchPlants();
  };

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 0) {
        setPage(page - 1);
        fetchPlants();
      }
    }

    if (direction === 'up') {
      setPage(page + 1);
      fetchPlants();
    }

    function displayCards() {
      return plants.length > 0
        ? plants.map((plant) => (
            <DisplayUserPlants plant={plant} token={props.token} />
          ))
        : null;
    }
  };

  function displayCards() {
    return plants.length > 0
      ? plants.map((plant) => <DisplayUserPlants plant={plant} />)
      : null;
  }

  return (
    <div>
      <div>
        <span>Enter a plant to search:</span>
        <input
          type='text'
          name='plantsearch'
          onChange={(e) => setPlantSelector(e.target.value)}
        />
        <button type='submit' onClick={(e) => handleSubmit()}>
          Search
        </button>
        <CardDeck>{displayCards()}</CardDeck>
      </div>
      <div>
        <button onClick={(e) => changePage(e, 'down')}>Previous Plants</button>
        <button onClick={(e) => changePage(e, 'up')}>Show More Plants</button>
      </div>
    </div>
  );
};

export default UserSearchPlants;