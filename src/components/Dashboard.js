import React, { useState, useEffect } from 'react';

import APIURL from '../helpers/environment';
import PlantTable from './PlantTable';
import PlantEdit from './PlantEdit';

const Dashboard = (props) => {
  const [plants, setPlants] = useState([]);
  const [plantsToUpdate, setPlantsToUpdate] = useState({});
  const [updateActive, setUpdateActive] = useState(false);
  const [reload, setReload] = useState(true);

  const refresh = () => {
    setReload(!reload);
  };

  const fetchPlants = () => {
    if (props.token === '') {
      return;
    }

    fetch(`${APIURL}/plants/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((plantData) => {
        setPlants(plantData);
      });
  };

  const editPlants = (plants) => {
    setPlantsToUpdate(plants);
  };

  const toggleModal = () => {
    setUpdateActive(!updateActive);
  };

  useEffect(() => {
    fetchPlants();
  }, [props.token]);

  useEffect(() => {
    fetchPlants();
  }, [reload]);

  return (
    <div className='gardenDiv'>
      <div>
        <br />
        {!props.userName ? (
          <h1>My Garden</h1>
        ) : (
          <h1>Welcome, {props.userName}</h1>
        )}
      </div>
      <br />
      <hr />
      <div>
        <PlantTable
          plants={plants}
          editPlants={editPlants}
          toggleModal={toggleModal}
          fetchPlants={fetchPlants}
          token={props.token}
        />
      </div>
      <div>
        {updateActive ? (
          <PlantEdit
            plantsToUpdate={plantsToUpdate}
            toggleModal={toggleModal}
            updateActive={updateActive}
            token={props.token}
            fetchPlants={fetchPlants}
            refresh={refresh}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
