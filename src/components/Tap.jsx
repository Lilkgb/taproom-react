import React from 'react';
import PropTypes from 'prop-types';
import '../scss/styles.scss';
import Editor from './Editor';

class Tap extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
    this.information = this.information.bind(this)
    this.closeEditor = this.closeEditor.bind(this)
  }
  information(){
    this.setState({
      edit: true
    })
  }
  closeEditor(){
    this.setState({
      edit: false
    })
  }
  render(){
    let editor = null
    if (this.state.edit){
      editor = <Editor closeEditor={this.closeEditor}/>
    } else {
      editor = false
    }
    let tapStyles = {
      textAlign: 'center',
      fontFamily: 'sans-serif',
      paddingTop: '25x',
      transition: '.3s linear',
      margin: '10px 10px',
      padding: '0px 10px',
    };
    return (
      <div style={tapStyles} className='hover-shadow'>
      <style jsx>{`
          div{
            width: 300px;
            overflow: hidden;
          }
          `}</style>
        <h3>{this.props.name} - ${this.props.price}</h3>
        <p><em>ABV: {this.props.abv}%</em></p>
        <p>last updated: {this.props.updateTime}</p>
        <button onClick={this.information}>hi</button>
        {editor}
      </div>
    );
  }
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string,
  updateTime: PropTypes.string.isRequired,
  information: PropTypes.func
};

export default Tap;
