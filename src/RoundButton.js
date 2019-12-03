import React, { Component } from 'react';
import './RoundButton.css';

class RoundButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e) {
      this.props.setPageFn(this.props.pageTag);
      console.log(`setpage ${this.props.pageTag}`);
    }

    render() {
        return (
            <div>
              <button onClick={this.handleClick} className={`round ${this.props.color} ${this.props.change}`}>{this.props.name}</button>
            </div>
        );
    }
}

export default RoundButton;
