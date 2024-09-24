import KeyWords from './keywords/Keywords'
import './App.css';
import React from 'react';
import Board from './board/Board';
import BoardProvider from './board/ShowContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoardProvider>
          <Board />
          <KeyWords />
        </BoardProvider>
      </header>
    </div>
  );
}

export default App;
