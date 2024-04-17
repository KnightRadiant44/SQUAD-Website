// App.js
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import LandingImage from './components/landing_image';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
   return (
     <div>
      <Navbar />
       <LandingImage />
       <AboutUs />
       <Events />
       <Footer />
     </div>
   );
}

export default App;