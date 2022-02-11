import React from 'react';
import { Clientes } from './Components/Clients';
import { Contacto } from './Components/Contacto';
import { Footer } from './Components/Footer';
import { Inicio } from './Components/Inicio';
import { Nosotros } from './Components/Nosotros';
import { Services } from './Components/Services';
import { NavBar } from './Components/NavBar';
import './css/style.css';
import 'animate.css';
import './css/responsive.css';
import { WhatsAppFloat } from './Components/WhatsAppFloat';

export const App = () => {
    return (
    <>
        <NavBar />
        <div className='page-container'>
            <Inicio />
            <div className='box'> 
                <Nosotros />
                <hr className='hr-box'/>
                <Services />
                <Clientes />
                <Contacto />
                <Footer />
             </div>
            <WhatsAppFloat />
        </div>
    </>
    );
};
