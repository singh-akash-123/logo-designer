import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav.js';
import Showcase from './Showcase';
import Gallery from './Gallery';
import SlickSlider from './SlickSlider';
import About from './About';
import './style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
   <Nav/>
   <Showcase/>
   <Gallery/>
   <SlickSlider/>
   <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
