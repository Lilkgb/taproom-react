import React from 'react';

function NewTapForm(){
  return (
    <div>
    <style jsx>{`
      div {
        margin: 10px;
      }
      `}</style>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Tap Name'/>
        <input
          type='number'
          id='price'
          placeholder='Price'/>
        <input
          type='number'
          id='abv'
          placeholder='Alcohol Content'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewTapForm;
