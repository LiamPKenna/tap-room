import React from 'react';
import Keg from './Keg';
import NewKegLink from './NewKegLink';
import kegs from '../kegs';

function KegList(props) {
  const listStyle = {
    margin: '20px',
    display: 'flex',
    flexFlow: 'row wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  };
  return (
    <div style={listStyle}>
      {kegs.map((keg,index) => 
        (<Keg keg={keg} key={index} employee={props.employee} />)
      )}
      {(props.employee) ? <NewKegLink /> : ''}
    </div>
  )
}

export default KegList;