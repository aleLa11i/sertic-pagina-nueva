import i18next from 'i18next';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { I18nContext } from './context/I18nContext';
import 'sweetalert2/src/sweetalert2.scss'

ReactDOM.render(
  <I18nContext>
    <App />
  </I18nContext>,
  document.getElementById('root')
);
