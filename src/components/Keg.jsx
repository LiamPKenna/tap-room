import React from 'react';
import Counter from './Counter';
import Price from './Price';

function Keg(props) {
  const kegStyle = {
    width: '40%',
    border: '1px solid darkgrey',
    borderRadius: '5px',
    margin: '10px',
    padding: '20px'
  };
  return (
    <div style={kegStyle}>
      <h3>{props.keg.name}</h3>
      <h4>{props.keg.brand}</h4>
      <Counter pints={props.keg.pints} employee={props.employee} />
      <Price price={props.keg.price} />
    </div>
  );

}

export default Keg;