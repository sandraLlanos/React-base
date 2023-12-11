/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'


// Props: it's a system for passing data from a parent component to a child component. 

// export const Props = (props) => {
//     console.log(props);
//     return ( 
//         <>
//         <div>hola</div>
//         <h1> mi nombre es:{ props.title } </h1>
//         </>
//      )
// }
export const Props = ({title}) => {
    console.log(title);
    return ( 
        <>
        <div>Hello</div>
        <h1> My name is:{ title } </h1>
        </>
     )
}

// PropTypes in React is a feature that allows you to specify the expected data types
// for the props of your components. This is especially useful for documenting 
// and validating the props that a component expects to receive, helping to prevent errors
// and improve code clarity.

Props.propTypes = {
    title: PropTypes.string.isRequired
}