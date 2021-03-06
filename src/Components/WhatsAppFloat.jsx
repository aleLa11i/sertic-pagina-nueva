import React from 'react';
import '../css/wsp-icon.css';

export const WhatsAppFloat = () => {
  return (
  <>
      <a   
        id='wsp'
        href='https://wa.me/+5493413938154' 
        target='blanck'
      />

      <img
        className='wsp-icon m-3 fixed-bottom animate__animated animate__fadeInUp rounded-circle'
        src="https://www.proandroid.com/wp-content/uploads/2018/03/WhatsApp.jpg" 
        alt="whatsapp" 
        onClick={() => document.getElementById('wsp').click()}
        width= '70px'
        height= '70px'
      />
  </>);
};
