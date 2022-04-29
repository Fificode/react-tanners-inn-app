import React from 'react'
import './App.css';
import {Footer, Header, AboutUs, Rooms} from './containers';
import {Navbar} from './components';
function App() {
  return (
    <div className='App'>
      <div className="tanners__landing-image">
        <div className="tanners__dark-background">
       <Navbar />
  <Header />
  </div>
  </div>
  <div className='tanners__light-background'>
  <AboutUs />
  <Rooms />
  <Footer />
  </div>
    </div>
  );
}

export default App;
