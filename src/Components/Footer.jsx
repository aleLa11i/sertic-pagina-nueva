import React from 'react';
import '../css/footer.css';

export const Footer = () => {
  return (
    <>
    <div className='footer-above'>
            <div className='footer-columns'> 
                <h3><i className='fas fa-map-marker-alt icons'></i>Ubicación <hr color='#1ce'/></h3>
                <p className='footer-info'>Urquiza 1285 PA <br/> S2000ANI - Rosario - Argentina</p>
            </div>

            <div className='footer-columns'>
                <h3><i className='fas fa-phone-alt icons'></i>Teléfono <hr color='#1ce'/></h3>
                
                <p className='footer-info'>+ 54 9 341 528-2575 / (15)6932434</p>
            </div>

            <div className='footer-columns'>
                <h3><i className='far fa-envelope icons'></i>E-mail <hr color='#1ce'/></h3>
                <p className='footer-info'>contacto@sertic.com.ar</p>
            </div>
        </div>

        <div className='footer-below'>
            <p>Copyright © SerTIC 2022. All Rights Reserved</p>
        </div>
    </>
  );
};
