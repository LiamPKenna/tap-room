import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkDivStyle = {
    textAlign: 'center',
    color: '#337ab7',
    textDecoration: 'none'
  };
  const headerStyle = {
    fontSize: '65px',
    background: 'linear-gradient(0deg, rgba(75,140,92,1) 29%, rgba(154,103,83,1) 54%, rgba(165,172,96,1) 71%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'rgba(0, 0, 0, .35)',
    margin: '20px auto',
    textShadow: '4px 4px 4px rgba(255, 255, 255, .5)',
    fontStyle: 'italic'
  };
  const headerDiv = {
    backgroundColor: '#d1d1d1',
    padding: '10px',
    textAlign: 'center'
  };
  return (
    <div style={headerDiv}>
      <h1 style={headerStyle} >Tip Top Tap Room</h1>
      <div style={linkDivStyle}>
        <Link to="/">PATRON</Link> | <Link to="/emp">EMPLOYEE</Link>
      </div>
    </div>
  );
}

export default Header;