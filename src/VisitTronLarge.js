import React, { Component, Image } from 'react';
import RoundButton from './RoundButton.js';

const getContainerStyle = (layout) => (
  {
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    flexDirection:'row',
    width:'100%',
    position:'relative',
    zIndex:'0',
    overflow:'hidden'

  }
)

const getImgStyle = (layout) => (
  {
    maxWidth:layout!=='large' ? '160%':'100%',
    // position:'relative'
    zIndex:'0',
    left:'0',
    transition:'left .5s',


  }
)

const getTextOverlayStyle = (layout) => (
  {
    position:'absolute',
    backgroundColor:'#ffffffbf',
    maxWidth:'25%',
    height:'100%',
    paddingLeft: '40px',
    paddingRight:'40px',
  }
)

class VisitTronLarge extends Component {
    constructor(props) {
        super(props);
        // console.log('visittronlarge:', this.props.setPageFn);
        this.updateCaroselIndex = this.updateCaroselIndex.bind(this);
        this.state = { caroselIndex:0 };

        if (this.props.carosel){
          const timer = setInterval(() => {
           this.updateCaroselIndex();
         }, 5000);
       }

    }

    updateCaroselIndex() {
      // console.log('HEY IM HRER');
        // this.setState({ caroselIndex: (this.state.caroselIndex+1)%this.props.imgs.length })
    }

    getCaroselImage() {
      // var i = 0;
      // let img=
      return <img src={this.props.imgs[this.state.caroselIndex]} style={getImgStyle(this.props.layout)} />
    }

    render() {
        return (
            <div style={getContainerStyle(this.props.layout)}>
              {
                this.props.carosel ?
                this.getCaroselImage()
                :
                <img src={this.props.img} style={getImgStyle(this.props.layout)} />
              }
              <div style={getTextOverlayStyle(this.props.layout)}>
                {this.props.preheader ? <p style={{color:'red'}}>{this.props.preheader}</p>:null}
                <h1 style={{color:'red', fontWeight:'bold'}}>{this.props.header}</h1>
                <p style={{color:'#8E1537', fontWeight:'bold'}}>{this.props.dates}</p>
                <p style={{color:'#8E1537'}}>{this.props.text}</p>
                {this.props.button ?
                  <RoundButton setPageFn={this.props.setPageFn} pageTag={this.props.pageTag} name='RESERVE TICKETS' color='red' change={false}/>
                  :
                  null
                }
              </div>

            </div>
        );
    }
}

export default VisitTronLarge;
