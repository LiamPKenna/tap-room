import React from 'react';

function Price(props) {
  const makeMoney = (value) => {
    return Number.parseFloat(value).toFixed(2);
  }
  const colorCode = (value) => {
    if (value > 7.5) {
      return 'red';
    } else if (value >= 5) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
  const priceStyles = {
    backgroundColor: colorCode(props.price),

  }
  return (
    <div style={priceStyles}>
      {`$${makeMoney(props.price)}`}
    </div>
  );
}

export default Price;