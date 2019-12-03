import React, { Component } from 'react';
import RoundButton from './RoundButton.js';
import "./RedHoverStyle.css";

const getButtonStyle = () => (
  {
    backgroundColor: '#eb0029',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '4px',
    cursor: 'pointer',
    borderRadius: '30px',
  }

)

const getContainerStyle = (layout) => (
  {
      display: 'flex',
      // backgroundColor: "lightblue",
      textAlign:'center',
      alignItems:'center'

  }
)

const menuItemDivStyle = {
  display: 'block',
  zIndex: '2',
  // flexDirection: 'column',
  // justifyContent: 'flex-start',

}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isButton: this.props.button,
          subMenu: this.props.subMenu,
          showSubMenu: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        // console.log('constructed');
    }

    componentDidMount() {
      // console.log('did get mounty!');
    }

    handleClick(event) {
      this.props.setPageFn(this.props.pageTag);
    }

    handleButtonClick(event) {
      console.log('hello');
      // this.props.setPageFn(this.props.pageTag);
    }


    handleMouseOver(event) {
      this.setState({ showSubMenu: true });
      // console.log('mouse over', event.target);
    }

    handleMouseLeave(event) {
      this.setState({ showSubMenu: false });
    }

    render() {
        return (
          <div onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseOver} style={getContainerStyle(this.props.layout)}>
            <div className="redhover menuItemDiv" >
              <h3 onClick={this.handleClick} style={this.props.button ? getButtonStyle(): {}}>{this.props.title}</h3>
              <div style={{position:'absolute', display:'flex', flexDirection:'column', alignItems:'center', opacity:1, transition: 'opacity 500ms'}}>
                { this.state.showSubMenu ? this.state.subMenu.map((item, i) => <RoundButton key={i} color='white' pageTag={item.pageTag} setPageFn={this.props.setPageFn} change='noChange' name={item.title}/>) : null }
              </div>
            </div>

          </div>
        );
    }
}

export default MenuItem;
