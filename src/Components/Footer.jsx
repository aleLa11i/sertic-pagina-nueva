import React from 'react';
import '../css/footer.css';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <>
    <div className='footer-above'>
            <div className='footer-columns'> 
                <h3> 
                    <FontAwesomeIcon icon={faMapMarkedAlt} className='icons' />
                    Ubicación 
                    <hr color='#1ce'/>
                </h3>
                <p className='footer-info'>Urquiza 1285 PA <br/> S2000ANI - Rosario - Argentina</p>
            </div>

            <div className='footer-columns'>
                <h3> 
                    <FontAwesomeIcon icon={faPhoneAlt} className='icons' />
                    Teléfono 
                    <hr color='#1ce'/>
                </h3>
                
                <p className='footer-info'>+ 54 9 341 528-2575 / (15)6932434</p>
            </div>

            <div className='footer-columns'>
                <h3> 
                    <FontAwesomeIcon icon={faEnvelope} className='icons' />
                    E-mail 
                    <hr color='#1ce'/>
                </h3>
                <p className='footer-info'>contacto@sertic.com.ar</p>
            </div>
        </div>

        <div className='footer-below'>
            <p>Copyright © SerTIC 2022. All Rights Reserved</p>
        </div>
    </>
  );
};
