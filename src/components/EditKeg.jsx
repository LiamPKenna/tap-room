import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function EditKeg(props) {
  const formStyle = {
    margin: '40px auto',
    backgroundColor: '#fcfcfc',
    padding: '30px',
    borderRadius: '10px',
    width: '80%',
  };
  return (
    <div style={formStyle}>
      <form action="">
        <FormControl fullWidth='true'>
          <InputLabel htmlFor="name">Beer Name</InputLabel>
          <Input id="name" defaultValue={props.keg.name} />
          <br/>
        </FormControl>
        <FormControl fullWidth='true'>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input id="brand" defaultValue={props.keg.brand} />
          <br/>
        </FormControl>
        <FormControl fullWidth='true'>
          <InputLabel htmlFor="abv">ABV</InputLabel>
          <Input id="abv" defaultValue={props.keg.alcoholContent} />
          <br/>
        </FormControl>
        <FormControl fullWidth='true'>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input id="price" defaultValue={props.keg.price} />
          <br/>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth='true'>SUBMIT</Button>
      </form>
    </div>
  );
}

export default EditKeg;