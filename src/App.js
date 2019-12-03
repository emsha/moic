import React from 'react';

import SiteWrapper from './SiteWrapper.js';
import cone from './images/icecreamcursor.png'
import './CustomCursorStyle.css'

function App() {
  return (
    <div className='god' style={{cursor:`url(${cone}), auto`}}>
      {/*<img src={`${cone}`}/>*/}
      <SiteWrapper />
    </div>
  );
}

export default App;
