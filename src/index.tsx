
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import state, { subscribe } from './redux/state';




export let rerenderEntireThree = (state:any) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App  state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireThree(state);

subscribe(rerenderEntireThree);

reportWebVitals();
