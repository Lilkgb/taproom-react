import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route exact path='/newTap' component={NewTapForm} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
