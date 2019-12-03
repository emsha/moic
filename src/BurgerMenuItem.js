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
            <div style={{ cursor:'pointer'}} onHover={this.handleHover} onClick={this.handleClick}>
              <h2> {this.props.title} </h2>
            </div>
        );
    }
}

export default BurgerMenuItem;
