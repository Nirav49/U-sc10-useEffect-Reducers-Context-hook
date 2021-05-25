import React, { useReducer } from 'react'

const Usereducer = () => {
    const initialstate = 0;
    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return state + 1;
        }
        if (action.type === 'decrement') {
            return state - 1;
        }
        if (action.type === 'setzero') {
            return state = initialstate;
        }
        if (action.type === 'increment2') {
            return state + 2;
        }
        if (action.type === 'multiply') {
            return state * 5;
        }
        if (action.type === 'decrement3') {
            return state - 3;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <center>
                <h1>Using Usereducer hook</h1>
                <h1>{state}</h1>
                <button onClick={() => dispatch({ type: "increment" })} >+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "setzero" })}>Reset</button>
                <button onClick={() => dispatch({ type: 'increment2' })}>Incrementbytwo</button>
                <button onClick={() => dispatch({ type: 'decrement3' })}>Decrementby3</button>
                <button onClick={() => dispatch({ type: "multiply" })}>multiplyby5</button>
            </center>
        </div>
    )
}

export default Usereducer;
