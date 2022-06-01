import React from 'react';
import sertic_contorno from '../../assets/sertic_contorno.png';
import '../css/inicio.css';


export const Home = () => {
  return (
  <div 
    id='inicio' 
    className='logo d-flex align-items-center justify-content-center vh-100'
  >
      <figure className='text-center'> 
        <img 
          className='animate__animated animate__fadeInUp'
          src={ sertic_contorno } 
          alt='Logo SerTIC'
          width='600'
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
        </div>
      </figure> 
  </div> ); 
};
