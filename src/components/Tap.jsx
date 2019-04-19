import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  let albumStyles = {
    backgroundColor: '#eee',
    fontFamily: 'sans-serif',
    paddingTop: '25x',
    transition: '.3s linear',
    margin: '10px 0px',
    padding: '0px 10px',
    borderBottom: '1px solid grey'
  };
  return (
    <div style={albumStyles} className='hover-shadow' data-aos='fade-in'>
      <h3>{props.song} - {props.album}</h3>
      <p><em>{props.artist}</em></p>
    </div>
  );
}

Tap.propTypes = {
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string,
};

export default Tap;
