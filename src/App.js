import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: color }}>
        <h1 className="text-4xl font-bold text-white">Hello world!</h1>
      </div>

      <div className="space-x-4 p-4 text-center">
        <button onClick={() => setColor('red')} className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
        <button onClick={() => setColor('green')} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
        <button onClick={() => setColor('blue')} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
        <button onClick={() => setColor('yellow')} className="bg-yellow-500 text-white px-4 py-2 rounded">Yellow</button>
        <button onClick={() => setColor('pink')} className="bg-pink-500 text-white px-4 py-2 rounded">Pink</button>
      </div>
    </>
  );
}

export default App;