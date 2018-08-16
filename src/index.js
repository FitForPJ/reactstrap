import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


const HomeWithRouter = () => (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

ReactDOM.render(<HomeWithRouter />, document.getElementById('root'));
registerServiceWorker();
