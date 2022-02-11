import React from 'react';
import '../css/clientes.css';
import Slider from 'react-slick';
import { Cliente } from './ReturnCliente';
import inta from '../img/inta.png';
import konecta from '../img/konecta.svg';
import mec from '../img/mec.png';
import leti from '../img/leti.png';
import polo from '../img/polo.png';
import autopista from '../img/autopista.png';
import motorx from '../img/logo-motorx.svg';
import expoagro_logo from '../img/expoagro_logo.png';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000
};

export const Clientes = () => {

  return (
    <div 
      id='clientes' 
      className='container clientes'
    >
      <h1>
        Empresas que confían en 
        <br/> SerTIC
        <hr /> 
      </h1>
      <Slider {...settings}>
              <Cliente 
                  link='https://www.argentina.gob.ar/inta'
                  img={ inta }
                  name='Inta'
              />
            
              <Cliente
                  link='https://www.grupokonecta.com/somos-globales/argentina/'
                  img={ konecta }
                  name='Konecta'
              />
            
              <Cliente 
                  link='https://www.meconsul.com/'
                  img={ mec }
                  name='MEC'
              />
            
              <Cliente 
                  link='http://www.letis.org/'
                  img={ leti }
                  name='Letis'
              />
            
              <Cliente 
                  link='https://polotecnologico.net/'
                  img={ polo }
                  name='PoloTecnologico'
              />
            
              <Cliente 
                  link='https://autopista.santafe.gov.ar/'
                  img={ autopista }
                  name='Autopista'
              />
            
              <Cliente 
                  link='https://reba.motorx.la/'
                  img={ motorx }
                  name='Motor X'
              />
            
              <Cliente 
                  link='https://www.expoagro.com.ar/'
                  img={ expoagro_logo }
                  name='Expoagro'
              />
      </Slider>
    </div>
  );
}

