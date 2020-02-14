import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

function NewKegLink(props) {

  const kegStyle = {
    width: '40%',
    border: '2px solid #3d3d3d',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
    padding: '20px 0px',
    textAlign: 'center',
    backgroundColor: '#3d3d3d',
    color: '#fcfcfc',
    minWidth: '325px',
  };
  return (
    <Link to="/new_keg" style={kegStyle}>
      <div >
        <h1>Add A New Keg</h1>
        <Icon style={{ fontSize: 75 }}>add_circle</Icon>
      </div>
    </Link>
  );

}

export default NewKegLink;