import React from 'react';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { MovementList } from './components/MovementList';

import { GlobalProvider } from './context/GlobalState'

import './assets/main.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Stats />
      <MovementList />
    </GlobalProvider>
  );
}

export default App;
