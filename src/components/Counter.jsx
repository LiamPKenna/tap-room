import React from 'react';
import Button from '@material-ui/core/Button';

function Counter(props) {
  console.log(props);
  
  const checkEmp = () => {    
    if (props.employee) {
      return (<Button variant="contained" style={btnStyle}>SELL</Button>)
    } 
  }
  const counterStyle = {
    display: 'grid',
    gridTemplateColumns: (props.employee)? '1fr 1fr' : '1fr',
    textAlign: 'center',
    backgroundColor: '#363636',
    color: 'white',
    border: '2px solid #d1d1d1'
  };
  const pintsLeftStyle = {
    height: '50px',
    paddingTop: '30px',
    fontSize: '18px'
  };
  const btnStyle = {
    margin: '10px',
    backgroundColor: (props.pints > 10) ? 'default' : 'red'
  }
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