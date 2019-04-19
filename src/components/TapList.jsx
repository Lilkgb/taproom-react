import React from 'react';
import Tap from './Tap';
import stewie from '../assets/images/stewie.png';

const masterTapList = [
  {
    name: 'Bud Light',
    price: '3',
    content: '4.2',
    picture: 'budLight.png'
  }
];

function TapList(){
  return (
    <div>
      <img src={stewie}></img>
      <hr/>
      {masterTapList.map((tap, index) =>
        <Tap name={tap.name}
          price={tap.price}
          content={tap.content}
          picture={tap.picture}
          key={index}/>
      )}
    </div>
  );
}

export default TapList;
