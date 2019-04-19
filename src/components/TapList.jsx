import React from 'react';
import Tap from './Tap';
import stewie from '../assets/images/stewie.png';
import '../scss/styles.scss';

const masterTapList = [
  {
    name: 'Bud Light',
    price: '3',
    content: '4.2',
    picture: 'budLight.png'
  },
  {
    name: 'Elysian Space Dust',
    price: '5',
    content: '8.2',
    picture: 'elysianSpaceDust.png'
  }
];
function TapList(){
  return (
    <div className="flex" >
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
