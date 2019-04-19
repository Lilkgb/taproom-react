import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Header(){
  let margin = {
    margin: '0',
    padding: '0',
    color: 'white'
  };
  let white = {
    color: 'white'
  };
  return (
    <div className='bg-grn header'>
      <h1 style={margin}>Tap Room</h1>
      <Link style={white} to="/">Home</Link> | <Link style={white} to="/inventory">Inventory</Link> | <Link style={white} to="/newTap">New Tap</Link> 
    </div>
  );
}

export default Header;
