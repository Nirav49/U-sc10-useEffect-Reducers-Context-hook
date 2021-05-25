import React from 'react'
import { Firstname, Lastname } from './App'

function Context2() {
    return (
        <div>
            <Firstname.Consumer>
                {(first) => {
                    return (
                        <Lastname.Consumer>
                            {(last) => {
                                return (
                                    <><center>
                                        <h1>Using Usecontext hook</h1>
                                        <h1 >Firstname is = {first} Lastname is = {last}</h1>
                                    </center>
                                    </>)
                            }}
                        </Lastname.Consumer>
                    )
                }}
            </Firstname.Consumer>
        </div>
    )
}

export default Context2;
