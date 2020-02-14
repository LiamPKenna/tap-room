import React from 'react';
import Counter from './Counter';
import Price from './Price';

function Keg(props) {
  const checkIfLow = (employee, number) => {
    if (employee && number < 10) {
      return '3px solid red';
    } else {
      return '1px solid darkgrey';
    }
  }
  const kegStyle = {
    width: '40%',
    border: checkIfLow(props.employee, props.keg.pints),
    borderRadius: '5px',
    margin: '10px'
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