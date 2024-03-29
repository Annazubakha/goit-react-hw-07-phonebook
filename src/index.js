import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer autoClose={2000} />
  </Provider>
);
