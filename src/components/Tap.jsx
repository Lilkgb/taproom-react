import React from 'react';
import PropTypes from 'prop-types';
import '../scss/styles.scss';

function Tap(props){
  let tapStyles = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    paddingTop: '25x',
    transition: '.3s linear',
    margin: '10px 10px',
    padding: '0px 10px',
  };
  return (
    <div style={tapStyles} className='hover-shadow' data-aos='fade-in'>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>ABV: {props.content}%</em></p>
      <img src={require(`../assets/beers/${props.picture}`)}></img>
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
