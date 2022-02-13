import './App.css';
import React from 'react';
import useTimer from './Timer';

function App() {
  const { number, isMultiple, timer } = useTimer();
  return (
      <div className="App">
      <p>{`Número randômico: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>Tempo: { timer }</p>
    </div>
  );
}

export default App;
