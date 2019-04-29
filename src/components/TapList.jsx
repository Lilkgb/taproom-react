import React from 'react';
import Tap from './Tap';
import '../scss/styles.scss';
import FormControl from './FormControl';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <div className="flex" >
      {props.tapList.map((tap) =>
        <Tap name={tap.name}
          price={tap.price}
          abv={tap.abv}
          updateTime={tap.updateTime}
          key={tap.id}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
}

export default TapList;
