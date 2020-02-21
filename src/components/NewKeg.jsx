import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function NewKeg() {

  const [name, setName] = useState('');  
  const [brand, setBrand] = useState('');  
  const [abv, setAbv] = useState('');  
  const [price, setPrice] = useState('');  

  const formStyle = {
    margin: '40px auto',
    backgroundColor: '#fcfcfc',
    padding: '30px',
    borderRadius: '10px',
    width: '80%',
  };

  const constructKeg = (e) => {
    e.preventDefault()
    const newKeg = {
      name: name,
      brand: brand,
      alcoholContent: abv,
      price: price
    };
    setName('');
    setBrand('');
    setAbv('');
    setPrice('');
    console.log(newKeg);  
  }
  return (
    <div style={formStyle}>
      <form onSubmit={constructKeg}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Beer Name</InputLabel>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value) }
            required />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input 
            id="brand"
            value={brand} 
            onChange={(e) => setBrand(e.target.value) }
            required />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="abv">ABV</InputLabel>
          <Input 
            id="abv"
            value={abv} 
            onChange={(e) => setAbv(e.target.value) }
            required />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input 
            id="price"
            value={price} 
            onChange={(e) => setPrice(e.target.value) }
            required />
          <br/>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth>SUBMIT</Button>
      </form>
    </div>
  );
}

export default NewKeg;