import React from 'react';
import Button from '@material-ui/core/Button';

function Price(props) {
  const makeMoney = (value) => {
    return Number.parseFloat(value).toFixed(2);
  }
  const colorCode = (value) => {
    if (value > 7.5) {
      return '#ffaf8f';
    } else if (value > 5) {
      return '#f4ff8f';
    } else {
      return '#8fffad';
    }
  }
  const checkEmp = () => {    
    if (props.employee) {
      return (<Button variant="contained" style={btnStyle}>EDIT</Button>)
    } 
  }
  const priceStyles = {
    display: 'grid',
    gridTemplateColumns: (props.employee)? '1fr 1fr' : '1fr',
    backgroundColor: colorCode(props.price),
    textAlign: 'center'
  };
  const priceTextStyle = {
    margin: '15px',
  };
  const btnStyle = {
    margin: '10px',
  }

  return (
    <div style={priceStyles}>
      <h3 style={priceTextStyle}>
        {`$${makeMoney(props.price)}`}
      </h3>
      {checkEmp()}
    </div>
  );
}

export default Price;