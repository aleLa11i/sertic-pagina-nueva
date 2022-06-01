import React, { useState } from 'react';
import sertic_contorno from '../../assets/sertic_contorno.png';
import '../css/navbar.css';
import '../css/language.css';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {

  const [t, i18n] = useTranslation("global");
  const { changeLanguage } = i18n;
  const [showNavBar, setShowNavBar] = useState('collapse navbar-collapse')
  
  const setLanguage = ( language ) =>{
    
    changeLanguage( language );

    localStorage.setItem('language', language);
  };

  const show = () =>{

    if( showNavBar === 'collapse navbar-collapse' ){
      setShowNavBar('collapse navbar-collapse show')
    }
    else
    {
      setShowNavBar('collapse navbar-collapse')
    }

  }


return (


  <div
    className='fixed-top animate__animated animate__fadeInLeft'
  >
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
         
        <a 
          className='navbar-brand' 
          href='#'
        >
          <img 
            height='40'
            src={ sertic_contorno } 
            alt='Logo SerTIC'
          />
        </a>
          

          <button 
            className='navbar-toggler' 
            onClick={ show }
            type='button' 
            >
            <span 
              className='navbar-toggler-icon'
            ></span>
          </button>

          <div 
            className={ showNavBar }
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    className='nav-item nav-link active' 
                    href='#inicio'
                >
                    { t("sections.Home") }
                </a>
              </li>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    activeclassname='active'
                    className='nav-item nav-link active' 
                    href='#nosotros'
                >
                    { t("sections.About") }
                </a>
              </li>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    activeclassname='active'
                    className='nav-item nav-link active' 
                    href='#servicios'
                >
                    { t("sections.Services") }
                </a>
              </li>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    activeclassname='active'
                    className='nav-item nav-link active' 
                    href='#clientes'
                >
                    { t("sections.Clients") }
                </a>
              </li>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    activeclassname='active'
                    className='nav-item nav-link active' 
                    href='#contacto'
                >
                    { t("sections.Contact") }
                </a>
              </li>

              <li 
                className='nav-item'
                onClick={ show }
              >
                <a 
                    activeclassname='active'
                    className='nav-item nav-link active' 
                    target='blanck'
                    href='https://www.sertic.com.ar/glpi/'
                >
                    { t("sections.Assistance") }
                </a>
              </li>

              <li
                className='language m-3 d-flex nav-item'
                onClick={ show }
              >
                <div
                  onClick={ ()=> setLanguage('es') }
                >ES</div>
                /
                <div
                  onClick={ ()=> setLanguage('en') }
                >EN</div>
              </li>

            </ul>

          </div>

        </div>

      </nav>
  </div>
)
}
