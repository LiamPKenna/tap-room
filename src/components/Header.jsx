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
    backgroundColor: '#d1d1d1',
    padding: '10px'
  };
  const headerStyle = {
    fontSize: '72px',
    background: 'linear-gradient(0deg, rgba(75,140,92,1) 29%, rgba(154,103,83,1) 54%, rgba(165,172,96,1) 71%)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'rgba(0, 0, 0, .35)',
    marginLeft: '30px',
    textShadow: '4px 4px 4px rgba(255, 255, 255, .5)',
    fontStyle: 'italic'
  };
  return (
    <div style={headerGrid}>
      <h1 style={headerStyle} >Tip Top Tap Room</h1>
      <div style={linkDiv}>
        <Link to="/">PATRON</Link> | <Link to="/emp">EMPLOYEE</Link>
      </div>
    </div>
  );
}

export default Header;