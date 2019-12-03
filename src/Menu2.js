import React, { Component } from 'react';

const getMenuAreaStyle = (layout) => (
  {
    backgroundColor: 'lightblue',
    listStyle:'none',
    display: 'flex',
    flexWrap:'wrap',


  }
)


const getMenuMainItemStyle = (layout) => (
  {
      backgroundColor:'lightgreen',

  }
)

class Menu2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={`menu-area ${this.props.layout}`}>
              <ul>
                <li>ABOUT</li>
                <li>
                  VISIT
                  <ul>
                    <li>SAN FRANCISCO</li>
                    <li>NEW YORK CITY</li>
                  </ul>
                </li>
                <li>ICE CREAM</li>
                <li>SHOP</li>
                <li>RESERVE TICKETS</li>
              </ul>
            </nav>
        );
    }
}

export default Menu2;
// const items = [
//   {title: 'ABOUT', pageTag:'about', subMenu:[], button:false},
//   {title: 'VISIT', pageTag:'home', subMenu:[{title: 'SAN FRANCISCO', pageTag:'visitsf', button:false}, {title: 'NEW YORK CITY', pageTag:'visitny', button:false}], button:false},
//   {title: 'ICE CREAM', pageTag:'icecream', subMenu:[], button:false},
//   {title: 'SHOP', pageTag:'shop', subMenu:[], button:false},
//   {title: 'RESERVE TICKETS', pageTag:'tickets', subMenu:[], button:true},
