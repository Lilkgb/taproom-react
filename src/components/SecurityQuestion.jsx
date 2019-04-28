import React from 'react';
import PropTypes from 'prop-types';

function SecurityQuestion(props){
  let _password = null;
  function submitPassword(event){
    event.preventDefault();
    props.sendPassword({
      password: _password.value
    })
    _password.value=''
  }
  return(
    <div>
      <form onSubmit={submitPassword}>
        <p>What is the password?</p>
        <input placeholder="password" ref={(input) => {_password = input;}}/>
        <button type="submit">submit</button>
        <p>hint: password is password</p>
      </form>
    </div>
  )
}
SecurityQuestion.propTypes = {
  sendPassword: PropTypes.func
}
export default SecurityQuestion
