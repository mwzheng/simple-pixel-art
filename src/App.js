import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Canvas from './components/Canvas'

function App() {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(6);

  return (
    <>
      <Form rows={rows} setRows={setRows} cols={cols} setCols={setCols} />
      <Canvas rows={rows} cols={cols} />
    </>
  );
}

export default App;
