import React from 'react';

class NewTapForm extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  handleClick(){
    console.log("YEET")
  }
  render(){
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
            <button onClick={this.handleClick}>Submit</button>
          </form>
        </div>
      );
  }
}

export default NewTapForm;
