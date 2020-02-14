import React from 'react';
import Keg from './Keg';
import kegs from '../kegs';

function KegList() {
  return (
    <div>

    {kegs.map((keg,index) => 
      (<Keg keg={keg} key={index} />)
    )}
    <h1>Hello</h1>
    </div>
  )
}

export default KegList;