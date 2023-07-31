import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

import Jokes from './components/Jokes';

import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
/*
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/jokes' element={<Jokes/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
