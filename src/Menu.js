import React, { Component } from 'react';
import MenuItem from './MenuItem.js';
import hamburger from './images/shittyhamburger.png';



const getMenuStyle = (layout) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems:'center',
  color:'white',
  fontSize:'x-small',
  zIndex:10,
  // backgroundColor: 'gray',
  flexGrow:0

});

class Menu extends Component {
  constructor(props) {
      super(props);

  }


  render() {
    if (this.props.layout==='large') {
      return (
        <div style={getMenuStyle()}>
        {this.props.items.map((item) => (
          <div style={{marginLeft: '50px'}}>
            <MenuItem key={item.pageTag} layout={this.props.layout} {...item} setPageFn={this.props.setPageFn} />
          </div>
        ))}
        </div>
      );
    }
    else {
      return(
        <div style={{height:'80%', width:'80%',}}>
          <img src={hamburger} onClick={this.props.handleBurgerClick} style={{height:'100%', width:'auto', cursor:'pointer'}}/>
        </div>
      );
    }
  }
}

export default Menu;
