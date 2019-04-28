import React from 'react';

function NewTapForm(){
  let _name = null;
  let _price = null;
  let _abv = null;
  
  function submitForm(){
    console.log("YEET")
  }
  return (
    <div>
      <style jsx>{`
          div {
            margin: 10px;
          }
          `}</style>
      <form onSubmit={this.submitForm}>
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

export default NewTapForm;
