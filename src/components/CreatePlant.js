import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreatePlant = (props) => {
  const [trefle_id, setTrefle_Id] = useState('126957');
  const [common_name, setCommon_Name] = useState('Orchardgrass');
  const [scientific_name, setScientific_Name] = useState('Dactylis glomeratas lanatus');
  const [image_url, setImage_Url] = useState(
    'https://bs.floristic.org/image/o/428f40dadfa0281dc890ead17fcd07882f9efb09'
  );
  const [notes, setNotes] = useState('My entry from code, not Postman');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/plants/', {
      method: 'Post',
      body: JSON.stringify({
          trefle_id: trefle_id,
          common_name: common_name,
          scientific_name: scientific_name,
          image_url: image_url,
          notes: notes,
        },
      ),
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setTrefle_Id('');
        setCommon_Name('');
        setScientific_Name('');
        setImage_Url('');
        setNotes('');
      });
    };
    return (
      <>
        <h3>Create Plant</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='trefle_id' />
            <Input
              trefle_id='trefle_id'
              value={trefle_id}
              onChange={(e) => setTrefle_Id(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='common_name' />
            <Input
              common_name='common_name'
              value={common_name}
              onChange={(e) => setCommon_Name(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='scientific_name' />
            <Input
              scientific_name='scientific_name'
              value={scientific_name}
              onChange={(e) => setScientific_Name(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='image_url' />
            <Input
              image_url='image_url'
              value={image_url}
              onChange={(e) => setImage_Url(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='notes' />
            <Input
              notes='notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormGroup>
          <Button type='submit'>Click to Submit</Button>
        </Form>
      </>
    );
    };

export default CreatePlant;