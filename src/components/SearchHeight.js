// const url = `${baseurl}${token}${page}&order[genus]=asc&order[family_common_name]=asc&order[family]=asc&order[common_name]=asc&order[scientific_name]=asc`;

import React, { useState, useEffect } from 'react';
import {
  CardDeck
} from 'reactstrap';
import DisplayHeight from "./DisplayHeight";


const SearchHeight = (props) => {
  const [plants, setPlants] = useState([]);
  const [minHeight, setMinHeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const [page, setPage] = useState(1);

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
        console.log(url)
      });
  }

  useEffect(() => {
    fetchHeight();
  }, []);

  const handleSubmit = (event) => {
    setPage(1);
    fetchHeight();
  };

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 0) {
        setPage(page - 1);
        fetchHeight();
      }
    }

    if (direction === 'up') {
      setPage(page + 1);
      fetchHeight();
    }
  };

  function displayCards() {
    return plants.length > 0
      ? plants.map((plant) => (
          <DisplayHeight plant={plant} token={props.token} />
        ))
      : null;
  }

  return (
   

<div>
      <div>
        <span>Enter a minimum height(cm):</span>
        <input
          type='text'
          name='minheight'
          onChange={(e) => setMinHeight(e.target.value)}
        />
        <span>Enter a maximum height(cm):</span>
        <input
          type='text'
          name='maxheight'
          onChange={(e) => setMaxHeight(e.target.value)}
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

export default SearchHeight;
