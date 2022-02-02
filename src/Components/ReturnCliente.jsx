import React from 'react';
import { Link } from 'react-router-dom';

export const Cliente = ({ link, img, alt }) => {

    console.log( link, img, alt)
  return (
    <a href={ link } target='blanck'>
        <div className='contenedor-item'>
            <img 
                src={ img } 
                alt={ alt }
            />
        </div>
    </a>
  );
};
