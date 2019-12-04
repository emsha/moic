import React, { Component } from 'react';
import RoundButton from './RoundButton.js'

const headerStyle = (
  {
    color: '#eb0029',
  }
)

const paragraphStyle = (
  {
    color:'white',
  }
)

class BodyTextElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor:'',margin:this.props.layout==='large'?'30px':'0px', display:'flex', flexDirection:'column'}}>
              <h1 style={headerStyle}>{this.props.header}</h1>
              <p style={paragraphStyle}>{this.props.content}</p>
              {
                this.props.button ?
                <RoundButton pageTag={this.props.pageTag} color='red' setPageFn={this.props.setPageFn} name={this.props.buttonText}/>
                :
                null
              }
            </div>
        );
    }
}

export default BodyTextElement;
