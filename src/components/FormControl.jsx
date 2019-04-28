import React from 'react';
import SecurityQuestion from './SecurityQuestion';
import NewTapForm from './NewTapForm';

class FormControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newTapForm: false
    };
  }
  render(){
    let currentState = null;
    if(this.state.newTapForm){
      currentState = <NewTapForm/>;
    } else {
      currentState = <SecurityQuestion/>;
    }
    return(
      <div>
        {currentState}
      </div>
    );
  }
}
export default FormControl
