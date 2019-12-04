import React, { Component } from 'react';

class BurgerMenuItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);

    }
    // {title: 'ABOUT', pageTag:'about', subMenu:[], button:false},
    handleClick(e) {
      // console.log(this.props);
      this.props.setPageFn(this.props.pageTag);
      this.props.closeMenuFn();
    }
    handleHover(e) {

    }

    render() {
        return (
            <div style={{ cursor:'pointer', paddingTop:'5vh'}} onHover={this.handleHover} onClick={this.handleClick}>
              <li style={{listStyle:'none'}}> {this.props.title} </li>
            </div>
        );
    }
}

export default BurgerMenuItem;
