import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function NewKeg() {

  const [name, setName] = useState('');  

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
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Beer Name</InputLabel>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value) } />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input id="brand" />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="abv">ABV</InputLabel>
          <Input id="abv" />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input id="price" />
          <br/>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth>SUBMIT</Button>
      </form>
    </div>
  );
}

export default NewKeg;