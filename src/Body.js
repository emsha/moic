import React, { Component } from 'react';
import CityEmblem from './CityEmblem.js';
import nyclogo from './images/logo_nyc.png';
import nycimg from './images/nyc.png'
import sflogo from  './images/logo_sf.png';
import sfimg from './images/SF+(2).png';
import groupphoto from './images/About.png';
import pintstacks from './images/Pint+Stacks_Updated.png';
import churro from './images/Museum-of-ice-cream_ice-cream_churro-churro.png';
import pinata from './images/Museum-of-ice-cream_ice-cream_pinata-pinata.png'
import conezone from './images/PINTS-02.png';
import queenbee from './images/museum-of-ice-cream_ice-cream_queen-bee.png';
import banana from './images/Museum-of-ice-cream_ice-cream_nana-banana.png';
import maltshake from './images/Museum-of-ice-cream_ice-cream_malt-shake.png';
import pbnj from './images/Museum-of-ice-cream_ice-cream_pb-&-p.png';
import sfTronPhoto from './images/sf-13-min.png';
import sfExhibitPhoto1 from './images/SF-08-min.png';
import sfExhibitPhoto2 from './images/SF-10-min.png';
import sfExhibitPhoto3 from './images/SF-11-min.png';
import nyTronPhoto from './images/Visit+NYC-05.png';
import nyExhibitPhoto1 from './images/Visit+NYC-06.png';
import './BodyStyle.css';
import BodyTextElement from './BodyTextElement.js';
import BodyTextElement2 from './BodyTextElement2.js';
import VisitTronLarge from './VisitTronLarge.js';
import VisitTronSmall from './VisitTronSmall.js';
import TwoColList from './TwoColList.js';
import RoundButton from './RoundButton.js';

const sfHours = [
  {day:'MONDAY', hours:'12:30pm-6:00pm'},
  {day:'TUESDAY', hours:'Closed'},
  {day:'WEDNESDAY', hours:'12:30pm-6:00pm'},
  {day:'THURSDAY', hours:'12:30pm-6:30pm'},
  {day:'FRIDAY', hours:'12:30pm-6:00pm'},
  {day:'SATURDAY', hours:'9:30pm-8:45pm'},
  {day:'SUNDAY', hours:'9:30am-8:00pm'},
]

const admissionHours =  [
  {day:'ADULT', hours:'$38'},
  {day:'KIDS UNDER 2', hours:'Free'},
  {day:'GROUP OF 10+', hours:'$29'},

]


const getHomeStyle = (layout) => (
  {
    display:'flex',
    flexDirection: layout==='small' ? 'column' : 'row',
    justifyContent:'center',
    padding: '30px',
    alignContent: 'center',
    minHeight: '100vh',
    maxHeight:'fit-content'
    // '100vh',

  }
)

const getBodyContainerStyle = (layout) => (
    {
      display:'flex',
      flexDirection: 'column',
      alignItems:'center'
    }
);

const getBodyEltStyle = (layout) => (
  {
    display: 'flex',
    padding:'10%',
    flexDirection:layout==='large' ? 'row' : 'column',
    justifyContent:'center',
    width:layout==='large' ? '800px' :'auto',
  }
)

const getBodyImgContainerStyle = (layout) => (
  {

    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    overflow:'hidden',

  }
)

const getBodyImgStyle = (layout, size='100%', resize=false) => (
  {
    maxWidth:layout!=='large' && resize ? '160%':size,
    overflow:'hidden',
    // maxWidth:'100%',
  }
)

const getBodyTopStyle = (layout) => (
  {
    height: '100px',
  }
)


class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      switch(this.props.page) {
        case 'about':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
            <div style={getBodyTopStyle(this.props.layout)}></div>
            <div style={getBodyImgContainerStyle(this.props.layout)}>
              <img src={groupphoto} style={getBodyImgStyle(this.props.layout, '100%',true)}/>
            </div>

            <div style={getBodyEltStyle(this.props.layout)}>
                <BodyTextElement header='About Us' button={false} content='Museum of Ice Cream transforms concepts and dreams into spaces that provoke imagination and creativity. MOIC is designed to be a culturally inclusive environment and community, inspiring human connection and through the universal power of ice cream. Museum of Ice Cream is a Figure8 brand.'/>
              {this.props.layout==='large' ?
                <div
                  style={{
                      width:'0px',
                      border: '1px solid white',
                      opacity: '.4',
                      margin: '30px',
                  }}/>
                  : null}

                <BodyTextElement button={false} header='Who We Are' content='We believe in creating beautiful and shareable environments that foster IRL interaction and URL connections, providing fun, multi-sensorial expressions of ice cream that cater to the appetites of our generation. With 4 locations under our belt, New York, Los Angeles, San Francisco and Miami, MOIC is just getting started.'/>

            </div>

          </div>
        );
        case 'visitny':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
            <div style={getBodyTopStyle(this.props.layout)}>
            </div>
            {
              this.props.layout==='large' ?
              <VisitTronLarge layout={this.props.layout} button={true} setPageFn={this.props.setPageFn} pageTag='tickets' carosel={false} img={nyTronPhoto} preheader="TICKETS ON SALE NOW" header="New York, We're Back!" dates='DECEMBER 14 - MARCH 1' text='MOIC NYC features imaginative, multi-sensory installations that bring to life your most delightful dreams: savor the sweetest treats on a magical floating table, slide dwon an epic three-story slide, take a celestial ride on a pink MOIC subway, and follow the sound of buzz to a giant "Queen Bee" hive. Taste our new signature flavors and ice cream treats along the way, before taking a dive in to the largest Sprinkle Pool yet!'/>
              :
              <VisitTronSmall layout={this.props.layout} button={true} setPageFn={this.props.setPageFn} pageTag='tickets' carosel={false} img={nyTronPhoto} preheader="TICKETS ON SALE NOW" header="New York, We're Back!" dates='DECEMBER 14 - MARCH 1' text='MOIC NYC features imaginative, multi-sensory installations that bring to life your most delightful dreams: savor the sweetest treats on a magical floating table, slide dwon an epic three-story slide, take a celestial ride on a pink MOIC subway, and follow the sound of buzz to a giant "Queen Bee" hive. Taste our new signature flavors and ice cream treats along the way, before taking a dive in to the largest Sprinkle Pool yet!'/>
            }

            <div style={{ width:'100%', display:'flex', flexDirection:this.props.layout==='large' ? 'row' : 'column', justifyContent:'center'}}>
              <TwoColList header='Hours' layout={this.props.layout} hoursList={sfHours} />
              {this.props.layout==='large' ?
                <div
                  style={{
                      width:'0px',
                      border: '1px solid white',
                      opacity: '.4',
                      marginTop: '30px',
                      marginBottom: '30px',
                      marginLeft:'50px',
                      marginRight:'50px',
                  }}/>
                  : null}
              <TwoColList header='Admission' layout={this.props.layout} hoursList={admissionHours} />
            </div>

            {
              this.props.layout==='large' ?
              <VisitTronLarge layout={this.props.layout} setPageFn={this.props.setPageFn}  pageTag='tickets' button={false} carosel={false} img={nyExhibitPhoto1} header='Cafe' dates="FREE & OPEN TO PUBLIC" text='The cafe at Museum of Ice Cream is coming soon! Come in for all your ice cream dreams and delights: scoops of our MOIC signature flavors, in cups or handmade waffle cones, and sweet specialty sundaes.'/>
              :
              <VisitTronSmall layout={this.props.layout} setPageFn={this.props.setPageFn}  pageTag='tickets' button={false} carosel={false} img={nyExhibitPhoto1} header='Cafe' dates="FREE & OPEN TO PUBLIC" text='The cafe at Museum of Ice Cream is coming soon! Come in for all your ice cream dreams and delights: scoops of our MOIC signature flavors, in cups or handmade waffle cones, and sweet specialty sundaes.'/>

            }
            <div style={{position:'relative', textAlign:'right', height:'500px', width:'100vw'}} className="mapouter">
              <div style={{overflow:'hidden', background:'none!important',height:'500px', width:'100vw'}} className="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=558%20broadway%20new%20york%20city%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>

            <div style={getBodyEltStyle(this.props.layout)}>
              <div style={{ width:'100%', display:'flex',flexDirection:this.props.layout==='large' ? 'row' : 'column', justifyContent:'center',maxWidth:'1100px', backgroundColor:''}}>
                <div >
                  <BodyTextElement layout={this.props.layout} button={false} header='Private Events' content='Come celebrate your special occasions with us! From birthdays to weddings, corporate events to family reunions, we are here to make your every moment special and memorable.'/>
                </div>
                {this.props.layout==='large' ?
                  <div
                    style={{
                        width:'0px',
                        border: '1px solid white',
                        opacity: '.4',
                        marginTop: '30px',
                        marginBottom: '30px',
                        marginLeft:'50px',
                        marginRight:'50px',
                  }}/>
                  :
                  null
                }
                <div style={{}}>
                  <BodyTextElement layout={this.props.layout} header='Morning Swim' buttonText='RESERVE TOUR' button={true} setPageFn={this.props.setPageFn} pageTag='tickets' content='Start your day with a Sprinkle Splash in your own private Sprinkle Pool before heading into the experience with your group. Bring up to 40 guests to your Morning Swim!' />
                  <BodyTextElement layout={this.props.layout} header='Midday Celebration' buttonText='RESERVE TOUR' button={true} setPageFn={this.props.setPageFn} pageTag='tickets' content='Who doesn’t want to celebrate midday?  Enjoy our decked out Piano Room and play DJ on the pink turn tables.  Bring up to 40 guests for one hour after your completing the MOIC experience.'/>
                  <BodyTextElement layout={this.props.layout} header='All Other Inquiries' buttonText='SUBMIT INQUIRY' button={true} setPageFn={this.props.setPageFn} pageTag='home' content='We would love to have you join us for our Morning Swim or Midday Celebration.  If you are looking for anything outside of these options, please reach out to us below.'/>
                </div>
              </div>
            </div>
          </div>

        );
        case 'visitsf':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
            <div style={getBodyTopStyle(this.props.layout)}>
            </div>
            {
              this.props.layout==='large' ?
              <VisitTronLarge layout={this.props.layout} button={true} setPageFn={this.props.setPageFn} pageTag='tickets' carosel={false} img={sfTronPhoto} header='Now On View: Pinkmas' dates='NOVEMBER 8 - JANUARY 12' text='Pinkmas is an MOIC annual holiday tradition where we embark on a winter adventure to the North Pole. Travel through immersive installations to find the true meaning of Pinkmas with friends, family, and loved ones. The Pinkmas experience is filled with interactive moments, from crafting ornaments and decorating the MOIC trees to tasting sweet treats that celebrate the year’s most festive spirit!'/>
              :
              <VisitTronSmall layout={this.props.layout} button={true} setPageFn={this.props.setPageFn} pageTag='tickets' carosel={false} img={sfTronPhoto} header='Now On View: Pinkmas' dates='NOVEMBER 8 - JANUARY 12' text='Pinkmas is an MOIC annual holiday tradition where we embark on a winter adventure to the North Pole. Travel through immersive installations to find the true meaning of Pinkmas with friends, family, and loved ones. The Pinkmas experience is filled with interactive moments, from crafting ornaments and decorating the MOIC trees to tasting sweet treats that celebrate the year’s most festive spirit!'/>
            }

            <div style={{ width:'100%', display:'flex', flexDirection:this.props.layout==='large' ? 'row' : 'column', justifyContent:'center'}}>
              <TwoColList header='Hours' layout={this.props.layout} hoursList={sfHours} />
              {this.props.layout==='large' ?
                <div
                  style={{
                      width:'0px',
                      border: '1px solid white',
                      opacity: '.4',
                      marginTop: '30px',
                      marginBottom: '30px',
                      marginLeft:'50px',
                      marginRight:'50px',
                  }}/>
                  : null}
              <TwoColList header='Admission' layout={this.props.layout} hoursList={admissionHours} />
            </div>

            {
              this.props.layout==='large' ?
              <VisitTronLarge layout={this.props.layout} setPageFn={this.props.setPageFn} carosel={true} pageTag='tickets' button={false} imgs={[sfExhibitPhoto1, sfExhibitPhoto2, sfExhibitPhoto3]} header='Exhibitions' dates="WHAT'S INSIDE?" text='MOIC San Francisco is proud to present 10 exhibition spaces with immersive and innovative concepts for all ice cream lovers. Ever-changing with seasonal themes, our fan favorites include Marye’s Diner (pink throwback and twist to the 70s classic), Dream (open canvas to express all your dreams and inspirations), Rainbow Room (tribute to the city’s history of gay pride) and of course, the largest Sprinkle Pool yet! Stay tuned here for any new concepts! '/>
              :
              <VisitTronSmall layout={this.props.layout} setPageFn={this.props.setPageFn} carosel={true} pageTag='tickets' button={false} imgs={[sfExhibitPhoto1, sfExhibitPhoto2, sfExhibitPhoto3]} header='Exhibitions' dates="WHAT'S INSIDE?" text='MOIC San Francisco is proud to present 10 exhibition spaces with immersive and innovative concepts for all ice cream lovers. Ever-changing with seasonal themes, our fan favorites include Marye’s Diner (pink throwback and twist to the 70s classic), Dream (open canvas to express all your dreams and inspirations), Rainbow Room (tribute to the city’s history of gay pride) and of course, the largest Sprinkle Pool yet! Stay tuned here for any new concepts! '/>

            }
            <div style={{position:'relative', textAlign:'right', height:'500px', width:'100vw'}} className="mapouter">
              <div style={{overflow:'hidden', background:'none!important',height:'500px', width:'100vw'}} className="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=museum%20of%20ice%20cream%20sf&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>

        );
        case 'icecream':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
          <div style={getBodyTopStyle(this.props.layout)}></div>
            <div style={getBodyImgContainerStyle(this.props.layout)}>
              <img src={pintstacks} style={getBodyImgStyle(this.props.layout, '79%')}/>
              <div style={getBodyEltStyle(this.props.layout)}>
                <div style={{  display:'flex', justifyContent:'center', alignItems:'center', }}>
                  <BodyTextElement2 layout={this.props.layout} header='THE FLAVORS' paragraphs={['Museum of Ice Cream debuts 7 new out-of-this-world flavors that will transport you to a place your tastebuds can only imagine. Gooey peanut butter with salted pretzels covered with creamy milk chocolate; juicy tropical mango with a hint of spicy chili and bursts of sweet raspberry; and swirls of rich dark chocolate and creamy vanilla with ribbons of fudge and crunchy pieces of chocolate-covered cone.',
                  'Sourced from the finest ingredients - true English toffee, 1950’s inspired malted milk balls, and ripe bananas from the MOIC jungle - these jam-packed flavors will take you on the sweetest taste adventure.']}/>
                </div>
              </div>
              <img src={churro} style={getBodyImgStyle(this.props.layout)}/>
              <img src={pinata} style={getBodyImgStyle(this.props.layout)}/>
              <img src={conezone} style={getBodyImgStyle(this.props.layout)}/>
              <img src={queenbee} style={getBodyImgStyle(this.props.layout)}/>
              <img src={banana} style={getBodyImgStyle(this.props.layout)}/>
              <img src={maltshake} style={getBodyImgStyle(this.props.layout)}/>
              <img src={pbnj} style={getBodyImgStyle(this.props.layout)}/>

            </div>
          </div>
        );
        case 'shop':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
            <div style={getBodyTopStyle(this.props.layout)}></div>
            <h1>beep beep boop</h1>
            <form>
              <input placeholder="hello" />
              <RoundButton name="GO" />
            </form>
          </div>

        );
        case 'tickets':
        return(
          <div style={getBodyContainerStyle(this.props.layout)}>
            <div style={getBodyTopStyle(this.props.layout)}></div>
            <h1>TICKETS BODY PAGE</h1>
          </div>
        );
        default: //home
        return(
          <div style={getHomeStyle(this.props.layout)}>
          <div style={getBodyTopStyle(this.props.layout)}></div>
          <CityEmblem layout={this.props.layout} name="San Francisco" logo={sflogo} image={sfimg} setPageFn={this.props.setPageFn} pageTag='visitsf'/>
          {this.props.layout!=='small' ?
            <div
              style={{
                  width:'10%',
                  border: 'none',
              }}/>
              : null}
            {this.props.layout==='small' ?
              <div
                style={{
                    width:'100%',
                    border: '1px solid white',
                    opacity: '.4',
                    marginTop: '30px',
                    marginBottom: '30px',
                }}/>
                : null}
            <CityEmblem name="New York City" layout={this.props.layout} logo={nyclogo} image={nycimg} setPageFn={this.props.setPageFn} pageTag='visitny' />

          </div>
        );



      }
    }
  }

  export default Body;
