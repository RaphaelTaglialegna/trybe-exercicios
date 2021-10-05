import './App.css';
import React from 'react';

const tasks = ['Estudar', 'Almoçar', 'Correr no Parque'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

   

function App() {
  return (
    <div>
      <h2>Tarefas</h2>
      <ol>
      {tasks.map((elen) => Task(elen))}
      </ol>
    </div>
  );   
}

export default App;
