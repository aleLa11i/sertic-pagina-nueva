import React from 'react';
import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
// import inta_logo from '../img/inta.png';
import { Cliente } from './ReturnCliente';
import '../css/clientes.css';

export const Clientes = () => {
  return (
    <div id='clientes'>
        <section className='clientes' >

            <h1>
              Empresas que confían en 
                <br/> SerTIC
                <hr /> 
            </h1>
            
            <div className='cont'> 

                <div className='clientes-contenedor'>

                    <Cliente 
                      link='https://www.argentina.gob.ar/inta'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://www.grupokonecta.com/somos-globales/argentina/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://www.meconsul.com/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='http://www.letis.org/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://polotecnologico.net/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://autopista.santafe.gov.ar/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://reba.motorx.la/'
                      img={ inta_logo }
                      alt='Inta'
                    />
                    <Cliente 
                      link='https://www.expoagro.com.ar/'
                      img={ inta_logo }
                      alt='Inta'
                    />


                    {/* <a href= target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/inta.png' alt='Inta'>
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/konecta.svg' alt='Konecta'>
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/mec.png' alt='MEC'>
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/leti.png' alt='Letis'>
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/polo.png' alt='PoloTecnologico'>
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/autopista.png' alt='Autopista'>
                            <!-- <h3>Autopistas</h3> -->
                        </div>
                    </a>
                    
                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/logo-motorx.svg' alt='Motor X'>
                        </div>
                    </a>

                    <a href=' target='blanck'>
                        <div className='contenedor-item'>
                            <img src='./img/expoagro_logo.png' alt='Expoagro'>
                        </div>
                    </a> */}
                    
                    
                </div>
            </div>     
      </section>
    </div>
  );
};
