import React from 'react';
import './css/style.css';
import 'animate.css';
import './css/responsive.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import { Services } from './Components/Services/Services';
import { Clients } from './Components/Clients/Clients';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer';
import { WhatsAppFloat } from './Components/WhatsAppFloat';

export const App = () => {
    return (
    <>
        <NavBar />
        <WhatsAppFloat />
            <Home />
            <div className='background'>
                <AboutUs />
                <hr className='hr-box'/>
                <Services />
                <Clients />
                <Contact />
                <Footer />
             </div>
    </>
    );
};
