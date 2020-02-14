import React from 'react';

function KegTop(props) {
  const kegTopStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 90px'
  };
  const alcoholStyle = {
    textAlign: 'right',
    paddingRight: '20px'
  };
  return (
  <div style={kegTopStyle}>
      <div>
        <h3>{props.keg.name}</h3>
        <h4>{props.keg.brand}</h4>
      </div>
      <div style={alcoholStyle}>
        <p>Alcohol:</p>
        <p>{props.keg.alcoholContent}%</p>
      </div>
    </div>
  );
}

export default KegTop;