import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <div>
          <Route exact path='/' element={<App/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/show/:id' element={<Show/>} />
        </div>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


registerServiceWorker();
