import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import kegs from '../kegs';

function EditKeg(props) {
  const formStyle = {
    margin: '40px auto',
    backgroundColor: '#fcfcfc',
    padding: '30px',
    borderRadius: '10px',
    width: '80%',
  };
  const keg = kegs[0];
  return (
    <div style={formStyle}>
      <h1>EDIT</h1>
      <form action="">
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Beer Name</InputLabel>
          <Input id="name" defaultValue={keg.name} />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input id="brand" defaultValue={keg.brand} />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="abv">ABV</InputLabel>
          <Input id="abv" defaultValue={keg.alcoholContent} />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input id="price" defaultValue={keg.price} />
          <br/>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth>SUBMIT</Button>
      </form>
    </div>
  );
}

export default EditKeg;