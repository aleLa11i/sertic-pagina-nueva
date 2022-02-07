import React from 'react';
// import '../css/servicios.css'


export const ReturnService = ({ title, description }) => {
  return (
    <div className='service-box'>
        <div className='service-box-head'>
            <h2 className='service-tittle'>{ title }</h2>
            <span className='fa-stack fa-4x icons2'>
                <i className='fa fa-circle fa-stack-2x'></i>
                <i className='fa fa-wrench fa-stack-1x fa-inverse'></i>
            </span>
        </div>
        <div className='service-box-content'>
            <p>
                { description }
            </p>
            <a href='#contacto' >
                <button className='btn-contacto' >
                    CONTACTAR
                </button>
            </a>
        </div>
    </div>
  );
};
