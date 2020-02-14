import React from 'react';
import Keg from './Keg';
import kegs from '../kegs';

function KegList(props) {
  return (
    <div>
      {kegs.map((keg,index) => 
        (<Keg keg={keg} key={index} employee={props.employee} />)
      )}
      <h1>Hello</h1>
    </div>
  )
}

export default KegList;