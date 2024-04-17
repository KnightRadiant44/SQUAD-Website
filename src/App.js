// App.js
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import LandingImage from './components/landing_image';
import Events from './components/Events';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
   return (
     <div>
      <Navbar />
       <LandingImage />
       <AboutUs />
       <Events />
       <Sponsors />
       <Footer />
       <ScrollToTopButton />
     </div>
   );
}

export default App;