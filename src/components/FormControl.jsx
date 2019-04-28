import React from 'react';
import SecurityQuestion from './SecurityQuestion';
import NewTapForm from './NewTapForm';

class FormControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newTapForm: false
    };
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkPassword(input){
    if(input.password === "password"){
      this.setState({
        newTapForm: true
      })
    } else {
      console.log("no")
    }
  }
  render(){
    let password = null;
    let currentState = null;
    if(this.state.newTapForm){
      currentState = <NewTapForm/>;
    } else {
      currentState = <SecurityQuestion sendPassword={this.checkPassword}/>;
    }
    return(
      <div>
        {currentState}
      </div>
    );
  }
}
export default FormControl
