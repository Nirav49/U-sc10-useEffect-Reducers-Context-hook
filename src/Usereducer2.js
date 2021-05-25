import React, { useState, useReducer } from 'react'

const Usereducer2 = () => {
    const [data, setData] = useState([{ 'name': 'keval' }, { 'name': 'kevin' }]);




    const reducer = (state, action) => {
        if (action.type === 'remove') {
            data[0].name = 'sahil'
            data[1].name = 'ajit'
        }


    }

    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <center><h1>Using usereducer hook</h1></center>
            {
                data.map(dat => {
                    return (
                        <>
                            <center>

                                <p>{dat.name}</p>

                            </center>
                        </>
                    )
                })
            }
            <center>
                <button onClick={() => dispatch({ type: 'remove' })}>click for change name</button>

            </center>
        </div>
    )
}

export default Usereducer2;
