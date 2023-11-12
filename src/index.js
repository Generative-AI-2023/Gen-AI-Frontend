import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Example from './components/Example';
import Homepage from './components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="/dist/output.css" rel="stylesheet"/>
          <title></title>
      </head>
      <div>
          <BrowserRouter>
          <Header/>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="example" element={<Example/>}/>
              </Routes>
          </BrowserRouter>
          
      </div>
    

  </React.StrictMode>
);
