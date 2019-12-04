import React, { Component } from 'react';
import logo from './images/moic-logo-white-one-line.png';
import Menu from './Menu.js';
import Menu2 from './Menu2.js';


const headerStyle = (layout) => (

  {
    display:'flex',
    flexDirection:'row',
    backgroundColor: "#F89ABAE0",
    justifyContent: "space-between",
    // position:'absolute',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor:'green',
    height: layout==='small' ? '48px' : '60px'
    // opacity: '1',

  }
);

const getImgStyle = (layout) => {
  var h = 0;
  switch (layout) {
    case 'small':
      h=40;
    break;
    case 'medium':
      h=30;
    break;
    case 'large':
      h=30;
    break;
    default:
      h = 20
  }
  return({
    height:layout==='small'? 'auto':`${h}%`,
    maxWidth:layout==='small'? '80%':'auto',
    // alignSelf:'center',
    // backgroundColor:'blue',
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
            <div style={headerStyle(this.props.layout)}>
              <img onClick={this.handleLogoClick} src={`${logo}`} style={getImgStyle(this.props.layout)}/>
              <Menu layout={this.props.layout} items={this.props.items} setPageFn={this.props.setPageFn} />
            </div>
          </div>
          );
        }
      else {
        return(
          <div>
            <div style={headerStyle(this.props.layout)}>
              <Menu layout={this.props.layout} handleBurgerClick={this.props.handleBurgerClick}/>
              <img onClick={this.handleLogoClick} src={`${logo}`} style={getImgStyle(this.props.layout)}/>
            </div>
          </div>
          );
        }

      }
}

export default Header;
