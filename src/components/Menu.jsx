import React from 'react';
import KegList from './KegList';
import PropTypes from "prop-types";

function Menu(props) {
  return (

    <KegList employee={props.employee} />
  );

}

Menu.propTypes = {
  employee: PropTypes.bool
};

export default Menu;