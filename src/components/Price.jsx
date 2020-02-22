import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Price(props) {

  const makeMoney = (value) => {
    return Number.parseFloat(value).toFixed(2);
  };
  const colorCode = (value) => {
    if (value > 7.5) {
      return '#ffaf8f';
    } else if (value > 5.5) {
      return '#f4ff8f';
    } else {
      return '#8fffad';
    }
  };
  const checkEmp = () => {    
    if (props.employee) {
      return (
        <Link to = {{
          pathname: `/edit_keg/${props.keg.id}`,
          state: {keg: props.keg}
        }} style={linkStyle} >
          <div>
            <Button variant="contained" style={btnStyle}>EDIT</Button>
          </div>
        </Link>
      );
    } 
  };

  // STYLE OBJECTS
  const priceStyles = {
    display: 'grid',
    gridTemplateColumns: (props.employee)? '1fr 1fr' : '1fr',
    backgroundColor: colorCode(props.keg.price),
    textAlign: 'center'
  };
  const priceTextStyle = {
    margin: '15px',
  };
  const btnStyle = {
    margin: '10px',
    width: '90%'
  };
  const linkStyle = {
    textDecoration: 'none'
  };

  return (
    <div style={priceStyles}>
      <h3 style={priceTextStyle}>
        {`$${makeMoney(props.keg.price)}`}
      </h3>
      {checkEmp()}
    </div>
  );
}

Price.propTypes = {
  employee: PropTypes.bool,
  keg: PropTypes.object
};

export default Price;