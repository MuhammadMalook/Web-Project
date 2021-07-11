import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Main from './Main'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
        
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <Route exact path="/Main" component={Main} >
        </Route>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
