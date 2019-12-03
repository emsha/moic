import React, { Component } from 'react';

const headerStyle = (
  {
    color: 'white',
    fontSize: '60pt'
  }
)

const paragraphStyle = (
  {
    color:'white',
    fontSize: '18pt'
  }
)

class BodyTextElement2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
              <h1 style={headerStyle}>{this.props.header}</h1>
              {this.props.paragraphs.map(paragraph => (
                <p style={paragraphStyle}>{paragraph}</p>
                )
              )
              }
            </div>
        );
    }
}

export default BodyTextElement2;
