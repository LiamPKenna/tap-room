import React from 'react';
import Counter from './Counter';
import Price from './Price';
import KegTop from './KegTop';

function Keg(props) {
  const checkIfLow = (employee, number) => {
    if (employee && number < 10) {
      return '2px solid red';
    } else {
      return '2px solid #3d3d3d';
    }
  }
  const kegStyle = {
    width: '40%',
    border: checkIfLow(props.employee, props.keg.pints),
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
    backgroundColor: '#fcfcfc',
    minWidth: '325px'
  };
  return (
    <div style={kegStyle}>
      <KegTop keg={props.keg}/>
      <Counter pints={props.keg.pints} employee={props.employee} />
      <Price price={props.keg.price} />
    </div>
  );

}

export default Keg;