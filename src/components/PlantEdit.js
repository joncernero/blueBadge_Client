import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import APIURL from '../helpers/environment';

const PlantEdit = (props) => {
  const [editNotes, setEditNotes] = useState(props.plantsToUpdate.notes);
  console.log(props.updateActive);
  const plantUpdate = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/plants/${props.plantsToUpdate.id}`, {
      method: 'Put',
      body: JSON.stringify({
        notes: editNotes,
      }),
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((plantData) => {
        console.log(plantData);
        props.toggleModal();
      });
  };
  return (
    <Modal isOpen={props.updateActive}>
      <ModalHeader>Edit/Update a Plant</ModalHeader>
      <ModalBody>
        <Form onSubmit={plantUpdate}>
          <FormGroup>
            <Label htmlFor='notes'>Edit Notes:</Label>
            <Input
              name='notes'
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
            />
          </FormGroup>
          <Button
            type='submit'
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Update the Plant!
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default PlantEdit;
