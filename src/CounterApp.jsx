import PropTypes from 'prop-types'

// if you do not need value inside your function,
//  it is a good practice to handle functions outside the functional component
const handleAdd = (event) => console.log(event)
// function handleAdd(event){
//     console.log(event);
// }

export const CounterApp = ({ value }) => {
    // console.log('value :>> ', value);
    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handleAdd }>
            {/* <button onClick={ (event) => handleAdd(event) }> */}
                +1
            </button>
            <button>-1</button>
            <input onFocus={(e) =>{console.log('Focused on Input', e)}}/>
            <input onBlur={(e) =>{console.log('Triggered because this input lost focus', e)}}/>
        </>
     );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

