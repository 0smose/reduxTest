import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import PastasContainer from './components/PastaContainer'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <PastasContainer />
      </div>
    </Provider>
  )
}

export default App;
