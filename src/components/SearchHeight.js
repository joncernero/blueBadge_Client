// const url = `${baseurl}${token}${page}&order[genus]=asc&order[family_common_name]=asc&order[family]=asc&order[common_name]=asc&order[scientific_name]=asc`;

import React, { useState, useEffect } from 'react';
import { CardDeck, Tooltip, Container } from 'reactstrap';
import { Button } from '../components/styled';
import DisplayPlants from './DisplayPlants';

const SearchHeight = (props) => {
  const [plants, setPlants] = useState([]);
  const [minHeight, setMinHeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const [page, setPage] = useState(1);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  function fetchHeight() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl = 'https://trefle.io/api/v1/species?';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const pageurl = `&page=${page}`;
    const heighturl = `&range[maximum_height_cm]=${minHeight},${maxHeight}`;
    const url = `${baseurl}${token}${heighturl}${pageurl}&filter_not[image_url]=null&order[common_name]=asc`;
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
    fetchHeight();
  }, [page]);

  const handleSubmit = (event) => {
    setPage(1);
    fetchHeight();
  };

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 0) {
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
        <span className='searchTitle'>Search by a Range of Plant Height:</span>
        <br />
        <Tooltip
          placement='top'
          isOpen={tooltipOpen}
          target='input'
          toggle={toggle}>
          Enter a minimum height then a maximum height (cm)
        </Tooltip>
        <br />
        <span className='searchTitle'>Minimum height (cm): </span>
        <input
          type='text'
          name='minheight'
          onChange={(e) => setMinHeight(e.target.value)}
        />
        <br />
        <br />
        <span className='searchTitle'>Maximum height (cm):</span>
        <input
          type='text'
          name='maxheight'
          onChange={(e) => setMaxHeight(e.target.value)}
        />
        <br />
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

export default SearchHeight;
