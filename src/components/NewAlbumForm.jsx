import React from 'react';

function NewAlbumForm(){
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewAlbumForm;
