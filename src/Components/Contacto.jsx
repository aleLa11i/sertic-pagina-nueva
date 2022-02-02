import React, { useRef, useEffect } from 'react';
import '../css/contacto.css';

import '../css/map.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbGExMWkiLCJhIjoiY2t3Nmg4dzdqNzNndjJ2bXRxN29rcGY4byJ9.NEWRnqXP-98PS7S6lxcyRQ';

const initialPoint = {
  lng: -60.63973586545013, 
  lat: -32.9427014048633,
  zoom: 15
};

export const Contacto = () => {

  const mapRef = useRef();
  const map = useRef();

  useEffect( () => {
    const newMap = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ -60.63973586545013, -32.9427014048633 ],
        zoom: 15
    })
      .scrollZoom.disable()
    
    map.current = newMap;
  },[ initialPoint ]);

  useEffect(() => {
    const marker = new mapboxgl.Marker();
        
      marker
          .setLngLat([ -60.63973586545013, -32.9427014048633 ])
          .addTo( map.current )
          .setDraggable( true );
  

  }, [ initialPoint, map ]);
  

  return (
    <div
      className='row'
    >
      <div
          ref={ mapRef }
          className='map  col'
      />
        
      <section id='contacto' className='contacto col'>


        <div className='form-container'>
            <form 
              // action=''
            >
                <h1>Contactanos</h1>
                <input 
                  type='text' 
                  // value={ name } 
                  placeholder='Nombre' 
                />
                <input 
                  type='text' 
                  // value='' 
                  placeholder='Correo' 
                />
                <textarea placeholder='Mensaje'></textarea>
            </form>

                <button 
                  type='button' 
                  className='btn-primary'
                > 
                  enviar 
                </button>
        </div>

      </section>
    
    </div>
  );
};
