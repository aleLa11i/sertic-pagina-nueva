import React, { useRef, useEffect, useState } from 'react';
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
  const [form, setForm] = useState({
    name:'',
    email:'',
    msg:''
  });
  const { name, email, msg } = form;
  const [alert, setAlert] = useState('');

  useEffect( () => {
    const newMap = new mapboxgl.Map({
        container       : mapRef.current,
        style           : 'mapbox://styles/mapbox/streets-v11',
        center          : [ -60.63973586545013, -32.9427014048633 ],
        zoom            : 15,
        scrollZoom      : false,
        boxZoom         : false,
        doubleClickZoom : false,
        // dragPan         : false,
    })

    
    map.current = newMap;
  },[ initialPoint ]);

  useEffect(() => {
    const marker = new mapboxgl.Marker();
        
      marker
          .setLngLat([ -60.63973586545013, -32.9427014048633 ])
          .addTo( map.current )
  

  }, [ initialPoint, map ]);
  

  const onChange = ( {target} ) => {
    const { name, value } = target;
    
    setForm({
      ...form,
      [ name ]:value
    });
    
  };
  

  const onSubmit = ( ev ) => {
    ev.preventDefault();

    if( !name.trim() || !email.trim() || !msg.trim() )
    {
      return setAlert(
        'Uno de los campos está incompleto'
      );
    }
    else{
      setAlert('');
    };
  };


  return (
    <div
      className='contacto'
    >
      <div
          ref={ mapRef }
          className='map'
      />
        
      <section id='contacto' className='contacto'>
        <div 
          className='form-container'
        >
            <form 
              onSubmit={ onSubmit }
            >
                <h1>Contactanos</h1>
                <input 
                  name='name'
                  className='form-control'
                  type='text' 
                  value={ name } 
                  placeholder='Nombre' 
                  onChange={ onChange }
                />
                <input 
                  name='email'
                  className='form-control'
                  type='text' 
                  value={ email } 
                  placeholder='Correo' 
                  onChange={ onChange }
                />
                <textarea 
                  name='msg'
                  className='form-control'  
                  value={ msg }
                  placeholder='Mensaje'
                  onChange={ onChange }
                ></textarea>
                
                <button 
                  type='button' 
                  className='button'
                  onClick={ onSubmit }
                > 
                  enviar 
                </button>
            </form>
            
            <h5
              style={{'color':'red'}}
            >
              { alert }
            </h5>  
            

        </div>

      </section>
    
    </div>
  );
};
