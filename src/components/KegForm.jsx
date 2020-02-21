import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from  'react-router-dom';

function KegForm(props) {

  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState('');  
  const [brand, setBrand] = useState('');  
  const [abv, setAbv] = useState('');  
  const [price, setPrice] = useState(''); 
  const keg = (props.kegs) ? props.kegs.filter(k => k.id === id)[0] : null; 

  useEffect(() => {
    if (keg != null) {
      setName(keg.name);
      setBrand(keg.brand);
      setAbv(keg.alcoholContent);
      setPrice(keg.price);
    }
  }, [keg]);

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
      alcoholContent: parseFloat(abv),
      price: parseFloat(price),
      pints: 124
    };
    if (keg) newKeg.id = keg.id;
    setName('');
    setBrand('');
    setAbv('');
    setPrice('');
    props.submitKeg(newKeg); 
    history.push('/emp');
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
            type="number"
            value={abv} 
            onChange={(e) => setAbv(e.target.value) }
            required />
          <br/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input 
            id="price"
            type="number"
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

export default KegForm;