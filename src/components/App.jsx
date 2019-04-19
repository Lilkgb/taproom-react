import React from 'react';
import AlbumList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewAlbumForm from './NewTicketForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={AlbumList} />
        <Route exact path='/inventory' component={NewTicketForm} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
