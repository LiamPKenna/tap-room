import React from 'react';
import Counter from './Counter';
import Price from './Price';
import KegTop from './KegTop';
import PropTypes from 'prop-types';

function Keg(props) {

  // STYLE UTILITY FUNCTIONS
  const checkIfLowBorder = (employee, number) => (
    (employee && number < 10) ? 
      '2px solid red' : 
      '2px solid #3d3d3d'
  );
  const checkIfLowShadow = (employee, number) => (
    (employee && number < 10) ? 
      '3px 3px 15px red' : 
      'none'
  );

  // STYLE OBJECTS
  const kegStyle = {
    border: checkIfLowBorder(props.employee, props.keg.pints),
    boxShadow: checkIfLowShadow(props.employee, props.keg.pints),
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
    backgroundColor: '#fcfcfc',
    minWidth: '325px',
    maxWidth: '550px'
  };

  return (
    <div style={kegStyle} className='keg'>
      <style>{`
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
      <Counter 
        pints={props.keg.pints} 
        id={props.keg.id} 
        sellPint={props.sellPint}
        employee={props.employee} />
      <Price keg={props.keg} employee={props.employee} />
    </div>
  );

}

Keg.propTypes = {
  employee: PropTypes.bool,
  keg: PropTypes.object,
  sellPint: PropTypes.func
};

export default Keg;