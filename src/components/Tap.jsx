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
      <style jsx>{`
          div{
            width: 300px;
            overflow: hidden;
          }
          img{
            height: 200px;
            width: auto;
          }
        `}</style>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>ABV: {props.abv}%</em></p>
      <p>{props.updateTime}</p>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string,
  updateTime: PropTypes.string.isRequired
};

export default Tap;
