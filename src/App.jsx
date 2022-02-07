import React from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Clientes } from './Components/Clients/Clients';
import { Contacto } from './Components/Contacto';
import { Footer } from './Components/Footer';
import { Inicio } from './Components/Inicio';
import { Nosotros } from './Components/Nosotros';
import { Services } from './Components/Services';
import { NavBar } from './Components/ui/NavBar';
import './css/style.css';
import 'animate.css';
import { WhatsAppFloat } from './Components/WhatsAppFloat';

export const App = () => {
 
    return (
    <>
        <Router>
            <NavBar />
            <div className='page-container'>
                <Inicio />
                <div className='box'>
                    <Nosotros />
                    <Services />
                    <Clientes />
                    <Contacto />
                    <Footer />
                </div>

                <WhatsAppFloat />

            </div>
        </Router>
    </>
    );
};
