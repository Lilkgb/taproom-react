import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Album Name'/>
        <input
          type='text'
          id='location'
          placeholder='Artist Name'/>
        <textarea
          id='issue'
          placeholder='Description'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
