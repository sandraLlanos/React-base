import { useState } from 'react';
import PropTypes from 'prop-types'



export const CounterUseSate = ({ value }) => {    
    
    const [counter, setCounter] = useState(value)
    const handleAdd = () => {setCounter(counter + 1)}
    const handleSubtrac = () => {setCounter(counter - 1)}
    const handleReset = () => {setCounter(value)}

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> Initial value: { value } </h2>
            <h2> Handle value { counter } </h2>

            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubtrac }>
                -1
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
        </>
     );
}

CounterUseSate.propTypes = {
    value: PropTypes.number
}

