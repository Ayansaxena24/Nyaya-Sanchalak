import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Assuming your main React component is in App.js
import { store } from './app/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
