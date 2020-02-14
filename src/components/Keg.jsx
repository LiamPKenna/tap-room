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
  const kegTopStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 90px'
  };
  const alcoholStyle = {
    textAlign: 'right',
    paddingRight: '20px'
  };
  return (
    <div style={kegStyle}>
      <div style={kegTopStyle}>
        <div>
          <h3>{props.keg.name}</h3>
          <h4>{props.keg.brand}</h4>
        </div>
        <div style={alcoholStyle}>
          <p>Alcohol:</p>
          <p>{props.keg.alcoholContent}%</p>
        </div>
      </div>
      <Counter pints={props.keg.pints} employee={props.employee} />
      <Price price={props.keg.price} />
    </div>
  );

}

export default Keg;