import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkDiv = {
    textAlign: 'center',
    color: '#337ab7',
    textDecoration: 'none',
    paddingTop: '30px'
  };
  const headerGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 200px',
    backgroundColor: 'grey',
    padding: '10px'
  };
  return (
    <div style={headerGrid}>
      <h1>Top Tap Room</h1>
      <div style={linkDiv}>
        <Link to="/">PATRON</Link> | <Link to="/emp">EMPLOYEE</Link>
      </div>
    </div>
  );
}

export default Header;