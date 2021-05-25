import React from 'react'
import Context2 from './Context2'

function Context1() {
    return (
        <div>
            <Context2 />
        </div>
    )
}

export default Context1;



import React, { createContext } from 'react'
import Context1 from './Context1';

const Firstname = createContext();
const Lastname = createContext();

const App = () => {

  return (
    <div>
      <Firstname.Provider value="nirav">
        <Lastname.Provider value="gabani">
          <Context1 />
        </Lastname.Provider>
      </Firstname.Provider>
    </div>
  )
}

export default App;
export { Firstname, Lastname };
