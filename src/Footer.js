import React, { Component } from 'react';
import FooterElement from './FooterElement.js';
import EmailForm from './EmailForm.js';
import igLogoRed from './images/ig_logo_red.png';
import igLogoPink from './images/ig_logo_pink.png'
import './RedHoverStyle.css';

const companyl = [
  'Contact', 'Careers', 'MOIC Cares', 'Press', 'FAQs'
]
const companylObject = companyl.map((name) => <h3 className="redhover">{name}</h3>);

const connectObject = <img style={{height:'25px', width:'auto'}} src={`${igLogoPink}`}/>;

const locations = [
  {name:'San Francisco', address:'1 Grant Ave. San Francisco, CA 94108'},
  {name:'New York City', address:'558 Broadway, New York, NY, 10012'}
];

const locationsObject = locations.map(({ name, address }) => <div><h3>{name}</h3><p>{address}</p></div>);

const getFooterStyle= (layout) => (

  {
    display: 'flex',
    flexDirection: layout==='large' ? 'row' : 'column',
    justifyContent:'space-between',
    backgroundColor: '#F6DBE1',
    color: '#F89ABA',
    // padding: layout==='small'?'10px':'20px',
  });

const columnStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-between',
  flex:1,
  paddingRight:'30px',
  paddingLeft: '30px',
}
const innerColumnStyle = {
  display: 'flex',
}


class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={getFooterStyle(this.props.layout)}>
              <div style={columnStyle}>
                <div style={innerColumnStyle}>
                  <FooterElement title='GET THE INSIDE SCOOP' content={<EmailForm />}/>
                </div>
              </div>
              <div style={columnStyle}>
                <div style={innerColumnStyle}>
                  <FooterElement title='COMPANY' content={companylObject}/>
                </div>
                <div style={innerColumnStyle}>
                  <FooterElement title='CONNECT' content={connectObject}/>
                </div>
              </div>
              <div style={columnStyle}>
                <div style={innerColumnStyle}>
                  <FooterElement title='LOCATIONS' content={locationsObject}/>
                </div>
              </div>
            </div>
        );
    }
}

export default Footer;
