import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ReturnService = ({ title, icon, description }) => {
  return (
    <div 
        className='rounded-3 service-box'
    >
        <div>
            <h2 
                className='service-tittle'
            >{ title }</h2>
                
            <span className='fa-stack fa-4x icons2'>
                <FontAwesomeIcon icon={ icon } className='icon'/>
            </span>
        </div>
        <div className='service-box-content blockquote d-flex flex-column align-items-center justify-content-center'>
            { description }
        </div>
    </div>
  );
};
