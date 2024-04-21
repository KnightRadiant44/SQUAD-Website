// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import LandingImage from './components/landing_image';
import Events from './components/Events';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import SponsorsPage from './components/SponsorsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import SponsorsPageSponsors from './components/SponsorsPage/SponsorsPageSponsors';

function App() {
   return (
     <Router>
       <div>
         <Navbar />
         <Routes>
           <Route path="/" element={
             <>
               <LandingImage />
               <AboutUs />
               <Events />
               <Sponsors />
               <Footer />
               <ScrollToTopButton />
             </>
           } />
           <Route path="/sponsors" element={
              <>
                <SponsorsPage />
                < SponsorsPageSponsors />
                <Footer />
                <ScrollToTopButton />
              </> 
              } />
         </Routes>
       </div>
     </Router>
   );
}

export default App;