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
import DisplayFlowers from './DisplayFlowers';
import { Link } from 'react-router-dom';

const SearchFlowers = (props) => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);
  const [flowerColor, setFlowerColor] = useState();

  function fetchFlowers() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl =
      'https://trefle.io/api/v1/species?filter%5Bflower_color%5d=';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const color = `${flowerColor}&`;
    const pageurl = `&page=${page}`;
    const url = `${baseurl}${color}${token}${pageurl}&filter_not[image_url]=null&order[common_name]=asc`;
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
          <DisplayFlowers plant={plant} token={props.token} />
        ))
      : null;
  }

  return (
    <div>
      <div>
        <span>Flower Color:</span>
        <input
          type='text'
          name='flowersearch'
          onChange={(e) => setFlowerColor(e.target.value)}
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

export default SearchFlowers;
