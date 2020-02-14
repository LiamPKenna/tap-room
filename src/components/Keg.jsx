import React from 'react';
import Counter from './Counter';
import Price from './Price';

function Keg(props) {
  return (
    <div>
      <h3>{props.keg.name}</h3>
      <h4>{props.keg.brand}</h4>
      <Counter pints={props.keg.pints} employee={props.employee} />
      <Price price={props.keg.price} />
    </div>
  );

}

export default Keg;