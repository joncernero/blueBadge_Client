import React, { useState, useEffect } from 'react';
import {
  CardDeck,
  Tooltip
} from 'reactstrap';
import DisplayUserPlants from './DisplayUserPlants';

const UserSearchPlants = (props) => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [plantSelector, setPlantSelector] = useState();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen); 

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
      if (page > 1) {
        setPage(page - 1);
        fetchPlants();
      }
    }

    if (direction === 'up') {
      setPage(page + 1);
      fetchPlants();
    }
  };

  function displayCards() {
    return plants.length > 0
      ? plants.map((plant) => <DisplayUserPlants plant={plant} token={props.token} />)
      : null;
  }

  return (
    <div>
      <br />
      <hr />
      <h4>Plants are listed alphabetically by the plant's common name.  Click on the "+" button on a plant to add it to your garden.  Once a plant is in your garden, you can add your own personal notes regarding each specific plant.</h4>
      <hr />
      <br />
      <div>
        <span>Search by a plant name:</span>
        <br />
        <Tooltip placement="top" isOpen={tooltipOpen} target="input" toggle={toggle}>Hosta, ficus, pine, oak...</Tooltip>
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
        <br />
        <p>plants will display here after you click 'Search'</p>
        <button onClick={(e) => changePage(e, 'down')}>Previous Plants</button>
        <button onClick={(e) => changePage(e, 'up')}>Show More Plants</button>
      </div>
    </div>
  );
};

export default UserSearchPlants;
