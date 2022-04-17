import React from 'react'
import './App.css';
import {Footer, Header, AboutUs, Rooms} from './containers';
import {Navbar} from './components';
function App() {
  return (
    <div className='App'>
       <Navbar />
  <Header />
  <AboutUs />
  <Rooms />
  <Footer />
    </div>
  );
}

export default App;
