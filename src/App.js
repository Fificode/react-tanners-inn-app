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
  <AboutUs />
  <Rooms />
  <Footer />
    </div>
  );
}

export default App;
