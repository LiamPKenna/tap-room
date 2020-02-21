import React from 'react';
import Keg from './Keg';
import NewKegLink from './NewKegLink';
import PropTypes from 'prop-types';

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
      {props.kegs.map((keg,index) => 
        (<Keg keg={keg} key={index} employee={props.employee} sellPint={props.sellPint} />)
      )}
      {(props.employee) ? <NewKegLink /> : ''}
    </div>
  );
}

KegList.propTypes = {
  employee: PropTypes.bool,
  sellPint: PropTypes.func,
  kegs: PropTypes.arrayOf(PropTypes.object)
};

export default KegList;