import React, { Component } from 'react';

class TwoColList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:this.props.layout==='large' ? 'center':'space-between', justifyContent:'flex-start', alignItems:'flex-start', padding:'20px',backgroundColor:'none', width:'content-size'}}>
              <h1 style={{color:'red'}}>{this.props.header}</h1>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'none', width:this.props.layout==='large'?'fit-content':'100%'  }}>

                <div>
                  {this.props.hoursList.map(
                    item => (
                      <p style={{listStyle:'none', color:'white', fontWeight:'bold'}}>{item.day}</p>
                    )
                  )}

                </div>

                <div style={{paddingLeft:'30px'}}>
                  {this.props.hoursList.map(
                    item => (
                      <p style={{listStyle:'none', color:'white'}}>{item.hours}</p>
                    )
                  )}
                </div>
                {
                  this.props.layout==='large' ?
                    null
                    :
                    <div style={{flexGrow:'.2'}}></div>
                }
              </div>
            </div>
        );
    }
}

export default TwoColList;
