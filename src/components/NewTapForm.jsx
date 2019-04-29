import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTapForm(props){
  let _name = null;
  let _price = null;
  let _abv = null;

  function submitForm(event){
    event.preventDefault();
    props.sendTapForm({
      name: _name.value,
      price: _price.value,
      abv: _abv.value,
      id: v4(),
      updated: new Moment()
    });
    _name.value = ''
    _price.value = ''
    _abv.value = ''
  }
  return (
    <div>
      <style jsx>{`
          div {
            margin: 10px;
          }
          `}</style>
      <form onSubmit={submitForm}>
        <input
          type='text'
          id='name'
          placeholder='Tap Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='number'
          id='abv'
          placeholder='Alcohol Content'
          ref={(input) => {_abv = input;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  sendTapForm: PropTypes.func
}

export default NewTapForm;
