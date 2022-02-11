import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ReturnService = ({ title, icon, description }) => {
  return (
    <div className='service-box'>
        <div className='service-box-head'>
            <h2 className='service-tittle'>{ title }</h2>
                
            <span className='fa-stack fa-4x icons2'>
                <FontAwesomeIcon icon={ icon } className='icon'/>
                <i className='fa fa-wrench fa-stack-1x fa-inverse'></i>
            </span>
        </div>
        <div className='service-box-content'>
            <p>
                { description }
            </p>
        </div>
        <a href='#contacto' >
            <button className='btn-contacto' >
                contactar
            </button>
        </a>
    </div>
  );
};
