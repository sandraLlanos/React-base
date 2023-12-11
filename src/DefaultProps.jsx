/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'


export const DefaultProps = ({title}) => {
    console.log(title);
    return ( 
        <>
        <h1> My name is:{ title } </h1>
        </>
     )
}

DefaultProps.defaultProps = {
    title: 'no title'
}