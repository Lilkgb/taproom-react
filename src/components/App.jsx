import React from 'react';
import TapList from './TapList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';
import Home from './Home';
import FormControl from './FormControl';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      masterTapList: []
    }
    this.handleNewForm = this.handleNewForm.bind(this);
  }
  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTapTime(),
      60000
    );
  }
  updateTapTime(){
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.forEach((ticket) =>
      ticket.updateTime = (ticket.updated).fromNow(true)
    );
    this.setState({masterTapList: newMasterTapList})
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }
  handleNewForm(newTap){
    let newMasterTapList = this.state.masterTapList.slice();
    newTap.updateTime = (newTap.updated).fromNow(true)
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList})
  }
  something(){
    console.log("yup")
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/inventory' render={()=><TapList tapList={this.state.masterTapList}/>}/>
          <Route path='/formControl' render={()=><FormControl sendTapForm={this.handleNewForm}/>}/>
          <Route component={Error404}/>
        </Switch>
        <h1 style={{height: '50px'}}></h1>
      </div>
    );
  }
}

export default App;
