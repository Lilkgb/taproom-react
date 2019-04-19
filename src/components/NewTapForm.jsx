import React from 'react';

function NewTapForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Tap Name'/>
        <input
          type='text'
          id='location'
          placeholder='Tap Alcahol Content'/>
        <textarea
          id='issue'
          placeholder='Description'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewTapForm;
