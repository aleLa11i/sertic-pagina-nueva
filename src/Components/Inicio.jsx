import React from 'react';
import sertic_contorno from '../img/sertic_contorno.png';
import '../css/inicio.css';


export const Inicio = () => {
  return (
  <div 
    id='inicio' 
    className='d-flex container justify-content-center'
  >
      <figure className='logo'> 
        <img 
          className='animate__animated animate__fadeInUp'
          height='350' 
          src={ sertic_contorno } 
          alt='Logo SerTIC'
        />

        <hr />

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
              className='btn-lg btn-primary'
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
              className='btn-lg btn-success'
            > 
              WhatsApp 
            </button>
          </a>
        </div>
      </figure> 
  </div> ); 
};
