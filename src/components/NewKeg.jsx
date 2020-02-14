import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function NewKeg() {

  return (
    <div>
      <style jsx>
        {`input {
          width: 100%;
          display: block;
        }`}
      </style>
      <form action="">
        <FormControl>
          <InputLabel htmlFor="name">Beer Name</InputLabel>
          <Input id="name" />
          <br/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input id="brand" />
          <br/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="abv">ABV</InputLabel>
          <Input id="abv" />
          <br/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="price">Beer Price</InputLabel>
          <Input id="price" />
          <br/>
        </FormControl>
        <Button variant="contained" type="submit">SUBMIT</Button>
      </form>
    </div>
  );
}

export default NewKeg;