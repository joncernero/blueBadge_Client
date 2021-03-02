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

const PlantEdit = (props) => {
   const [editNotes, setEditNotes] = useState(
    'Demo Edit/update of an entry from code, not Postman'
  );

  const plantUpdate = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/plants/1', {
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
        setEditNotes('');
      });
    };
    return (
      <Modal isOpen={true}>
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
            <Button type='submit'>Update the Plant!</Button>
          </Form>
        </ModalBody>
      </Modal>
    );

};
export default PlantEdit;
