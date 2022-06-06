import React, { useEffect, useState } from 'react';
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
    const [dark, setDark] = useState( localStorage.getItem('theme')  );

    // useEffect(() => {
       
       
    //    console.log("dark:"+theme);

    //    setDark( theme )
      
    // }, [ ])
    

    return (
        <div
            className={ dark ? 'text-light' : 'text-dark' }
        >
            <NavBar 
                setDark={ setDark }
                dark={ dark }
            />
            <WhatsAppFloat />
                <Home />
                <div 
                    className={ dark ? 'bg-dark' : 'bg-light' }
                >
                    <AboutUs />
                    <hr className={`hr-box ${ dark ? 'text-light' : 'text-dark' }`}/>
                    <Services dark={ dark } />
                    <Clients  dark={ dark } />
                    <Contact />
                    <Footer />
                </div>
        </div>
    );
};
