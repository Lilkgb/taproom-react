import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Header(){
  let margin = {
    margin: '0',
    padding: '0'
  }
  return (
    <div className='bg-grn header'>
      <h1 style={margin}>Albums</h1>
      <Link to="/">Home</Link> | <Link to="/newAlbum">Create New Album</Link>
    </div>
  );
}

export default Header;
