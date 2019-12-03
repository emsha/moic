import React, { Component } from 'react';
import logo from './images/moic-logo-white-one-line.png';
import Menu from './Menu.js';
import Menu2 from './Menu2.js';


const headerStyle = {
  display:'flex',
  backgroundColor: "#F89ABAE0",
  justifyContent: "space-between",
  // position:'absolute',
  alignItems: 'center',
  padding: '20px',
  // opacity: '1',

}


const getImgStyle = (layout) => {
  var h = 0;
  switch (layout) {
    case 'small':
      h=20;
    break;
    case 'medium':
      h=20;
    break;
    case 'large':
      h=20;
    break;
    default:
    h = 20
  }
  return({
    width:'auto',
    height: `${h}px`,
    cursor: 'pointer',
  })
}


class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleLogoClick(event) {
      this.props.setPageFn("home")
    }

    render() {
      // console.log(this.props.layout)
      // console.log(getImgStyle(this.props.layout));
      if (this.props.layout==='large') {
        return (
          <div>
            <div style={headerStyle}>
              <img onClick={this.handleLogoClick} src={`${logo}`} style={getImgStyle(this.props.layout)}/>
              <Menu layout={this.props.layout} items={this.props.items} setPageFn={this.props.setPageFn} />
            </div>
          </div>
          );
        }
      else {
        return(
          <div>
            <div style={headerStyle}>
              <Menu layout={this.props.layout} handleBurgerClick={this.props.handleBurgerClick}/>
              <img onClick={this.handleLogoClick} src={`${logo}`} style={getImgStyle(this.props.layout)}/>
            </div>
          </div>
          );
        }

      }
}

export default Header;
