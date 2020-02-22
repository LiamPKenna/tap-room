import React from 'react';
import PropTypes from 'prop-types';

function KegTop(props) {

  // STYLE UTILITY FUNCTION
  const colorCode = (value) => {
    if (value >= 8) {
      return '#ffaf8f';
    } else if (value > 6) {
      return '#f4ff8f';
    } else {
      return '#8fffad';
    }
  };

  // STYLE OBJECTS
  const kegTopStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 90px',
    height: '140px'
  };
  const alcoholStyle = {
    textAlign: 'right',
    paddingRight: '20px',
    paddingTop: '15px',
    backgroundColor: colorCode(props.keg.alcoholContent),
    borderLeft: '2px solid #d1d1d1'
  };
  const nameStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
  };

  return (
    <div style={kegTopStyle}>
      <div style={nameStyle}>
        <h2>{props.keg.name}</h2>
        <h4>{props.keg.brand}</h4>
      </div>
      <div style={alcoholStyle}>
        <p>Alcohol:</p>
        <p>{props.keg.alcoholContent}%</p>
      </div>
    </div>
  );
}

KegTop.propTypes = {
  keg: PropTypes.object
};

export default KegTop;