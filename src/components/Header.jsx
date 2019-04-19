import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Header(){
  let styles = {
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div className='bg-grn header' style={styles}>
      <h1>Albums</h1>
      <Link to="/">Home</Link> | <Link to="/newAlbum">Create Ticket</Link>
    </div>
  );
}

export default Header;
