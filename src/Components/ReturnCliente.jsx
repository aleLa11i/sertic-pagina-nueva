import React from 'react';

export const Cliente = ({ link, img, name }) => {
  console.log( link, img, name)
  return (
    <div className='box-client'>
      <a className='client' href={ link } target='blanck'>
        <img 
            width='200'
            src={ img } 
            alt={ name }
        />
      <h4
        className='animate__animated animate__fadeInUp'
      >{ name }</h4>
      </a>
    </div>
  );
};
