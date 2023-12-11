import PropTypes from 'prop-types'
export const CounterApp = ({ value }) => {
    console.log('value :>> ', value);
    return ( 
        <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        </>
     );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

