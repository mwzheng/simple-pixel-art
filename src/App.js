import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Canvas from './components/Canvas'

function App() {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [color, setColor] = useState('#000000');

  return (
    <>
      <Form rows={rows} setRows={setRows} cols={cols} setCols={setCols} setColor={setColor} />
      <Canvas rows={rows} cols={cols} color={color} />
    </>
  );
}

export default App;
