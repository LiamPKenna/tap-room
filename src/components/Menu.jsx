import React from 'react';
import KegList from './KegList';

function Menu(props) {
  return (

    <KegList employee={props.employee} />
  );

}

export default Menu;