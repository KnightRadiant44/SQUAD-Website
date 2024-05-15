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
import SponsorsPage from './components/SponsorsPage/SponsorsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import SponsorsPageSponsors from './components/SponsorsPage/SponsorsPageSponsors';
import ContactUs from './components/contactUs/contactUs';
import ContactUsBoomBoomPow from './components/contactUs/contactUsBoomBoomPow';
import Aeda from './components/aeda';
import EventsPage from './components/events/Events';
import Project from './components/projects/Project';

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
               <Aeda />
               <Footer />
               <ScrollToTopButton />
             </>
           } />
           <Route path="/sponsors" element={
              <>
                <SponsorsPage />
                <SponsorsPageSponsors />
                <Footer />
                <ScrollToTopButton />
              </> 
           } />
           <Route path="/contactUs" element={
              <>
                <ContactUs />
                <ContactUsBoomBoomPow />
                <Footer />
                <ScrollToTopButton />
              </> 
           } />
           <Route path="/events" element={
              <>
                <EventsPage />
                <Footer />
                <ScrollToTopButton />
              </> 
           } />
            <Route path="/projects" element={
                <>
                  <Project />
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