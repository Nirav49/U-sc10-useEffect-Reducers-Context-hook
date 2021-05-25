import React from 'react'

const Forref = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="Text" ref={ref}></input>
        </div>)
})

export default Forref;



import React, { createRef } from 'react'
import Forref from './Forref'

const ch = createRef();

function App() {

  const actihandler = () => {
    ch.current.focus();
    ch.current.style.color = 'red'
    ch.current.style.backgroundColor = 'yellow'
    ch.current.style.textAlign = 'center'
  }
  return (
    <div>
      <center>
        <Forref ref={ch} /><br/>
        <button onClick={() => actihandler()}>Click</button>
      </center>
    </div>
  )
}

export default App;
