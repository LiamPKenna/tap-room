import React from 'react';
import Button from '@material-ui/core/Button';

function Counter(props) {
  console.log(props);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (<Button variant="contained" >SELL</Button>)
    } 
  }
  const counterStyle = {
    display: 'grid',
    gridTemplateColumns: (props.employee)? '1fr 1fr' : '1fr',
    textAlign: 'center',
    backgroundColor: 'lightgreen'
  };
  const pintsLeftStyle = {
    height: '40px',
    paddingTop: '15px'
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

export default Counter;