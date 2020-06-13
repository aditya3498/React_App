import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'
import './index.css'
import Routes from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(    
    <Router> 
        <Routes />
    </Router>,
    document.getElementById('root')
    );