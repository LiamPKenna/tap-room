import React from 'react';
import Button from '@material-ui/core/Button';

function Counter(props) {
  console.log(props);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (<Button variant="contained">SELL</Button>)
    } 
  }
  return (
    <div>
      <p>counter</p>
      {checkEmp()}
    </div>
  );
}

export default Counter;