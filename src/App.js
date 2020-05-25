import React from 'react';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { MovementList } from './components/MovementList';
import './assets/main.css';

function App() {
  return (
    <>
    <Header />
    <Stats />
    <MovementList />
    </>
  );
}

export default App;
