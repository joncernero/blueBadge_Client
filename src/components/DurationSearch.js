import React, { useState, useEffect } from 'react';
import { CardDeck, Tooltip, Container } from 'reactstrap';
import { Button } from '../components/styled';
import DisplayPlants from './DisplayPlants';

const SearchDuration = (props) => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [plantDuration, setPlantDuration] = useState();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  function fetchFlowers() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl = 'https://trefle.io/api/v1/species?';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const duration = `&filter[duration]=${plantDuration}`;
    const pageurl = `&page=${page}`;
    const url = `${baseurl}${token}${pageurl}${duration}&filter_not[image_url]=null&order[common_name]=asc`;
    fetch(corsURL + url)
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.data);
      });
  }

  useEffect(() => {
    fetchFlowers();
  }, [page]);

  const handleSubmit = (event) => {
    setPage(1);
    fetchFlowers();
  };

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 1) {
        setPage(page - 1);
      }
    }

    if (direction === 'up') {
      setPage(page + 1);
    }
  };

  function displayCards() {
    return plants.length > 0
      ? plants.map((plant) => (
          <DisplayPlants plant={plant} token={props.token} />
        ))
      : null;
  }

  return (
    <div className='plantComponents'>
      <br />
      <hr />
      <h6>
        Plants are listed alphabetically by the plant's common name. Click the
        "+" button on a plant to add it to your garden. Once a plant is in your
        garden, you can add your own personal notes regarding each specific
        plant.
      </h6>
      <hr />
      <br />
      <div>
        <span className='searchTitle'>Search by the Plant's Duration:</span>
        <br />
        <Tooltip
          placement='top'
          isOpen={tooltipOpen}
          target='input'
          toggle={toggle}>
          annual, perennial, or biennial
        </Tooltip>
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
        {plants.length > 0 ? null : (
          <p className='plantSearch'>
            plants will display here after you click 'Search'
          </p>
        )}
        <Button onClick={(e) => changePage(e, 'down')}>Previous Plants</Button>
        <Button onClick={(e) => changePage(e, 'up')}>Show More Plants</Button>
      </div>
    </div>
  );
};

export default SearchDuration;
