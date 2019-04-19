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
      <h3>{props.name} - ${props.price}</h3>
      <img src={require(`../assets/beers/${props.picture}`)}></img>
      <p><em>ABV: {props.content}%</em></p>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  content: PropTypes.string,
  picture: PropTypes.string
};

export default Tap;
