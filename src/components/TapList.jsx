import React from 'react';
import Tap from './Tap';
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
  },
  {
    name: 'Elysian Dayglow',
    price: '5',
    content: '7.2',
    picture: 'elysianDayglow.png'
  },
  {
    name: 'Elysian Superfuzz',
    price: '4',
    content: '6.4',
    picture: 'elysianSuperfuzz.png'
  },
  {
    name: 'Modelo',
    price: '3',
    content: '4.5',
    picture: 'modelo.png'
  },
  {
    name: 'Corona Extra',
    price: '3',
    content: '4.5',
    picture: 'coronaExtra.png'
  },
  {
    name: 'Coors Light',
    price: '3.50',
    content: '4.2',
    picture: 'coorsLight.png'
  },
  {
    name: 'Coors Banquet',
    price: '4',
    content: '5',
    picture: 'coorsBanquet.png'
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
