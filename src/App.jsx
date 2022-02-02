import React from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Clientes } from './Components/Clientes';
import { Contacto } from './Components/Contacto';
import { Footer } from './Components/Footer';
import { Inicio } from './Components/Inicio';
import { Nosotros } from './Components/Nosotros';
import { Servicios } from './Components/Servicios';
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
                    <Servicios />
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
