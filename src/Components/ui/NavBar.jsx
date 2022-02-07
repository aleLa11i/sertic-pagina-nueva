import React from 'react';
// import { SearchNavBar } from '../search/SearchNavBar'
// import { NavBarLog } from './NavBarLog'
import sertic_contorno from '../../img/sertic_contorno.png';
import '../../css/navbar.css';



export const NavBar = () => {
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
                  type='button' 
                  data-bs-toggle='collapse' 
                  data-bs-target='#navbarSupportedContent' 
                  aria-controls='navbarSupportedContent' 
                  aria-expanded='false' 
                  aria-label='Toggle navigation'>
                  <span 
                    className='navbar-toggler-icon'
                  ></span>
                </button>


                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

                    <li className='nav-item'>
                      <a 
                          activeclassname='active'
                          className='nav-item nav-link' 
                          href='#inicio'
                      >
                          Inicio
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                          activeclassname='active'
                          className='nav-item nav-link' 
                          href='#nosotros'
                      >
                          Nosotros
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                          activeclassname='active'
                          className='nav-item nav-link' 
                          href='#servicios'
                      >
                          Servicios
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                          activeclassname='active'
                          className='nav-item nav-link' 
                          href='#clientes'
                      >
                          Clientes
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                          activeclassname='active'
                          className='nav-item nav-link' 
                          href='#contacto'
                      >
                          Contacto
                      </a>
                    </li>

                  </ul>

                  {/* <form className='d-flex'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
                    <button className='btn btn-outline-success' type='submit'>Search</button>
                  </form> */}

                </div>
              </div>
            </nav>
        </div>
    )
}
