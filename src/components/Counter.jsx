import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function Counter(props) {

  //LOCAL STATE
  const [percentLeft, setPercentLeft] = useState((props.pints*100)/124);
  const [bgColor, setBgColor] = useState(`linear-gradient(0deg, rgba(36,36,36,1) ${percentLeft}%, rgba(54,54,54,1) ${percentLeft + 6}%, rgba(54,54,54,1) 100%)`);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (
        <Button 
          variant="contained" 
          style={btnStyle}
          onClick={sell}>SELL</Button>
      );
    } 
  };

  const sell = () => { 
    props.sellPint(props.id);
    setPercentLeft((props.pints*100)/124);
    setBgColor(`linear-gradient(0deg, rgba(36,36,36,1) ${percentLeft}%, rgba(54,54,54,1) ${percentLeft + 6}%, rgba(54,54,54,1) 100%)`);
  };

  // STYLE OBJECTS
  const counterStyle = {
    display: 'grid',
    gridTemplateColumns: (props.employee)? '1fr 1fr' : '1fr',
    textAlign: 'center',
    background: bgColor,
    color: 'white',
    border: '2px solid #d1d1d1'
  };
  const pintsLeftStyle = {
    height: '50px',
    paddingTop: '30px',
    fontSize: '18px'
  };
  const btnStyle = {
    margin: '10px'
  };

  return (
    <div style={counterStyle}>
      <div style={pintsLeftStyle}>
        {props.pints} pints left
      </div>
      {checkEmp()}
    </div>
  );
}

Counter.propTypes = {
  employee: PropTypes.bool,
  pints: PropTypes.number,
  sellPint: PropTypes.func,
  id: PropTypes.string
};


export default Counter;