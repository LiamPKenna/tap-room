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
    border: checkIfLow(props.employee, props.keg.pints),
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
    backgroundColor: '#fcfcfc',
    minWidth: '325px',
    maxWidth: '550px'
  };
  return (
    <div style={kegStyle} className='keg'>
            <style jsx>{`
        .keg {
          width: 40%;
        }
        @media (max-width: 714px) {
          .keg {
            width: 90% !important;
          }
        }
      `}</style>
      <KegTop keg={props.keg}/>
      <Counter pints={props.keg.pints} employee={props.employee} />
      <Price keg={props.keg} employee={props.employee} />
    </div>
  );

}

export default Keg;