import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';
import BurgerMenuItem from './BurgerMenuItem.js'

const menuItems = [
  {title: 'ABOUT', pageTag:'about', subMenu:[], button:false},
  {title: 'VISIT', pageTag:'', subMenu:[{title: 'SAN FRANCISCO', pageTag:'visitsf', button:true}, {title: 'NEW YORK CITY', pageTag:'visitny', button:true}], button:false},
  {title: 'ICE CREAM', pageTag:'icecream', subMenu:[], button:false},
  {title: 'SHOP', pageTag:'shop', subMenu:[], button:false},
  {title: 'RESERVE TICKETS', pageTag:'tickets', subMenu:[{title: 'SAN FRANCISCO', pageTag:'visitsf', button:false}, {title: 'NEW YORK CITY', pageTag:'visitny', button:false}], button:true},
];

const burgerMenuItems = [
  {title: 'HOME', pageTag:'home'},
  {title: 'ABOUT', pageTag:'about'},
  {title: 'VISIT SAN FRANCISCO', pageTag:'visitsf'},
  {title: 'VISIT NEW YORK CITY', pageTag:'visitny'},
  {title: 'ICE CREAM', pageTag:'icecream'},
  {title: 'SHOP', pageTag:'shop'},
];

const bodyStyle = {
  backgroundColor: "#F89ABA",
  flexGrow:2,
}

const containerStyle = {
  display: 'flex',
  backgroundColor: "#F89ABA",
  height:'100vh',
  flexDirection: 'column',

  // justifyContent: 'space-between',
  // padding: '20px',
}

class SiteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      layout: '',
      page: 'home',
      showBurgerMenu:false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.setPage = this.setPage.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.updateDimensions();

  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    console.log('component did mount site wrraoper');
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let w = typeof window !== "undefined" ? window.innerWidth : 0;
    let h = typeof window !== "undefined" ? window.innerHeight : 0;
    this.setState({ windowWidth:w, windowHeight:h });

    if (w>1024) {
      this.setState({ layout: "large" });
    }
    if (640<w && w<=1024) {
      this.setState({ layout: "medium" });
    }
    if (w <= 640) {
      this.setState({ layout: "small" });
    }
  }

  setPage(page) {
    console.log('setpage')
    console.log(page);
    this.setState( { page });
    console.log(this.state.page);
    window.scrollTo(0, 0);
  }

  handleBurgerClick(event) {
    this.setState( { showBurgerMenu: true });
    console.log(this.state.showBurgerMenu);
  }

  closeBurgerMenu(event) {
    this.setState( { showBurgerMenu: false });
    console.log(this.state.showBurgerMenu);
  }

//big: width>1024
//medium: width>
  render() {
    return (
      <div style={containerStyle}>
        <div style={{position:'fixed', width:'100vw', zIndex:1}}>
          <Header layout={this.state.layout} items={menuItems} handleBurgerClick={this.handleBurgerClick} setPageFn={this.setPage} />
        </div>
        <div style={bodyStyle}>
          <Body layout={this.state.layout} setPageFn={this.setPage} page={this.state.page}/>
        </div>
        <div>
          <Footer layout={this.state.layout}/>
        </div>
        {this.state.showBurgerMenu ?
          <div style={{position:'fixed', display:'flex', backgroundColor:'#FCF3F5', color:'#F89ABA', height:'100vh', width:'100vw', zIndex:'2'}}>
            <div style={{display:'flex', flexGrow:'1',flexDirection:'column', justifyContent:'space-between', maxWidth:'360px',}}>
              <div style={{ cursor:'pointer'}} onClick={this.closeBurgerMenu}>
                <h1 style={{marginLeft:'40px'}}>X</h1>
              </div>
              <div style={{ display:'flex', flexDirection:'column', justifyContent:'flex-start', paddingLeft:'40px'}}>
                {burgerMenuItems.map((item) => (
                  <BurgerMenuItem closeMenuFn={this.closeBurgerMenu} setPageFn={this.setPage} {...item}/>
                ))}
              </div>
              <div style={{ marginLeft:' 40px' ,display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h3>instagram</h3>
                <h3>pintrest</h3>
                <h3>contact</h3>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default SiteWrapper;
