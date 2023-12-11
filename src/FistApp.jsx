// import { Fragment } from "react";

const newMessage = 'Sandra';
const newMessage1 = 1234;
// const newMessage2 = true; 
const newMessage3 = [1,2,3,4];
const newMessage4 = {
    message: 'Hello obj',
    title: 'Sandra obj'
};
const myFunc = () => {
    return <div>return func</div>
}
function FirstApp() {
    return ( 
        // JSX expressions must have one parent element
        // <div> You can use Div
        //     <h1>Title</h1>
        //     <p>Subtitle</p>
        // </div>
        // <Fragment> You can Fragment
        //     <h1>Title</h1>
        //     <p>Subtitle</p>
        // </Fragment>
        <> 
        {/* You can use <></>, this is the same to Fragment */}
            <h1>Title</h1>
            <h2> { newMessage } </h2> 
            <h2> { newMessage1 } </h2> 
            {/* <h2> { newMessage2 } </h2> React don't show boolean */}
            <h2> { newMessage3 } </h2> 
            {/* <h2> { newMessage4 } </h2>  Objects are not valid as a React child */}
            <h2> { newMessage4.message } </h2> 
            <h2> { newMessage4.title } </h2> 
            <h2> { myFunc() } </h2> 
            <p>Subtitle</p>
        </>

     );
}

export default FirstApp;