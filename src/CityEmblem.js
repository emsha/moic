import React, { Component } from 'react';
import RoundButton from './RoundButton.js';

const containerStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
    // backgroundColor:'gray'
}


class CityEmblem extends Component {
  constructor(props) {
    super(props);
    // this.handleClick=this.handleClick.bind(this);
  }
  // handleClick(event) {
  //   console.log('buttonclicked');
  //   this.props.setPageFn(this.props.setPageTag);
  //
  // }

  render(){
    return (
      <div style={containerStyle}>
        <img src={this.props.image} />
        <img src={this.props.logo} />
        <RoundButton name='RESERVE TICKETS' color='white' change='change' setPageFn={this.props.setPageFn} pageTag={this.props.pageTag} />
      </div>
    );
  }
}

export default CityEmblem;
