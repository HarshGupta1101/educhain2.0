import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/cart.context';
import { initContract } from './utils/utils.js';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));

initContract().then(() => {
root.render(
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
});
