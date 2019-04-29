import React from 'react';
import PropTypes from 'prop-types';

function Editor(props){
  function something(){
    console.log(this)
  }
  return(
    <div>
      <p onClick={something}>edit items</p>
      <button onClick={props.closeEditor}>update</button>
    </div>
  )
}

Editor.propTypes = {
  closeEditor: PropTypes.func
}
export default Editor
