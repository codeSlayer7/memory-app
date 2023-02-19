import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { GoogleOAuthProvider } from '@react-oauth/google';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='643605290055-2h7hn8j2utai8jl4a269m3iv85kikr68.apps.googleusercontent.com'>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>


);


