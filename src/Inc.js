import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
  const [hok, setHok] = useState(0);

  useEffect(() => {
    if (hok > 0) {
      alert(`new state value is ${hok}`)
    }
  })

  return (
    <div>
      <center>
        <h1>{hok}</h1><br /><br />
        <button onClick={() => { setHok(hok + 1) }}>+</button>
        <button onClick={() => { setHok(hok - 1) }}>-</button>
      </center>
    </div>
  )
}

export default App;
