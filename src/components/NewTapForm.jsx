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
            <button onClick={this.handleClick}>Submit</button>
          </form>
        </div>
      );
  }
}

export default NewTapForm;
