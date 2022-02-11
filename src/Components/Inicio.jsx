import React from 'react';
import sertic_contorno from '../img/sertic_contorno.png';
import '../css/inicio.css';


export const Inicio = () => {
  return (
  <div 
    id='inicio' 
    className='inicio'
  >
      <figure className='logo'> 
        <img 
          className='animate__animated animate__fadeInUp'
          src={ sertic_contorno } 
          alt='Logo SerTIC'
        />

        <hr style={{'backgroundColor':'white'}} />

        <div
          className='animate__animated animate__fadeInUp row'
        >
          <a
            className='m-1' 
            href='https://www.linkedin.com/company/sertic-soluciones-informaticas' 
            target='blanck'
          >
            <button 
              type='button' 
              className='btn-primary'
            > 
              LinkedIn 
            </button>
          </a>

          <a 
            className='m-1'   
            href='https://wa.me/+5493413938154' 
            target='blanck'
          >
            <button 
              type='button' 
              className='btn-success'
            > 
              WhatsApp 
            </button>
          </a>
        </div>
      </figure> 
  </div> ); 
};
