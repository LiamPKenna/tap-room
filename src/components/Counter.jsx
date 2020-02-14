import React from 'react';
import Button from '@material-ui/core/Button';

function Counter(props) {
  console.log(props);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (<Button variant="contained">SELL</Button>)
    } 
  }
  const counterStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center'
  };
  return (
    <div style={counterStyle}>
      <p>{props.pints}</p>
      {checkEmp()}
    </div>
  );
}

export default Counter;