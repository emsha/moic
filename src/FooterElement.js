import React, { Component } from 'react';

const contentWrapperStyle = {
  color: "white",
}

class FooterElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      // console.log(this.props.content);
        return (
            <div>
              <h2>{this.props.title}</h2>
              <div style={contentWrapperStyle}>
                {this.props.content}

              </div>
            </div>
        );
    }
}

export default FooterElement;
