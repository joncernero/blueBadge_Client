import React, { useState, useEffect } from 'react';
import {
  CardDeck, Container
} from 'reactstrap';
import { Button } from '../components/styled'
import DisplayPlants from './DisplayPlants';

const SearchPlants = (props) => {
  const [plants, setPlants] = useState([]);
  const [page, setPage] = useState(1);

  function fetchPlants() {
    const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
    const baseurl = 'https://trefle.io/api/v1/plants?';
    const token = 'token=FKCFSL2qgSy2Gnwimlt25A-Ze2oYTp-CACmUCTxbtSc';
    const pageurl = `&page=${page}`;
    const url = `${baseurl}${token}${pageurl}&filter_not[image_url]=null&order[common_name]=asc`;
    url.replace('https', 'http')
    console.log(url);
    fetch(corsURL + url)
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.data);
        console.log(plants);
      });
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  const changePage = (event, direction) => {
    event.preventDefault();
    if (direction === 'down') {
      if (page > 1) {
        setPage(page - 1)
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
      ? plants.map((plant) => <DisplayPlants plant={plant} token={props.token} />)
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
        <Container>
        <CardDeck>{displayCards()}</CardDeck>
        </Container>
      </div>
      <div>
        <Button onClick={e => changePage(e, 'down')}>Previous</Button>
        <Button onClick={e => changePage(e, 'up')}>Show More</Button>
      </div>
    </div>
  );
};

export default SearchPlants;