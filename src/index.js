import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);


