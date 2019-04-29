import React from 'react';
import SecurityQuestion from './SecurityQuestion';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';

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
    let currentState = null;
    if(this.state.newTapForm){
      currentState = <NewTapForm sendTapForm={this.props.sendTapForm}/>;
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

FormControl.propTypes = {
  sendForm: PropTypes.func
}
export default FormControl
