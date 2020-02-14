import React from 'react';

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
  const priceStyles = {
    backgroundColor: colorCode(props.price),
    textAlign: 'center',
    padding: '20px'
  };
  const priceTextStyle = {
    margin: '0',
  };
  return (
    <div style={priceStyles}>
      <h3 style={priceTextStyle}>
        {`$${makeMoney(props.price)}`}
      </h3>
    </div>
  );
}

export default Price;