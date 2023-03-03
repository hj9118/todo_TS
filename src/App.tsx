import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Item } from './types/type';
import InsertItem from './components/InsertItem';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div className='header'>
          <h1>{`Todo List`}</h1>
        </div>
        <InsertItem/>
        <ItemList/>
      </div>
    </div>
  );
}

export default App;
