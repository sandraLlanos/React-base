import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './HelloWorldApp'
// import FirstApp from './FistApp';
// import { Props } from './Props';
// import { DefaultProps } from './DefaultProps';
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp /> */}
    {/* pass props, when I need to pass a number I can use {} expression */}
    {/* <Props title={123}  subtitle={ 123 }/> */}
    {/* <DefaultProps/> */}
    <CounterApp value={123} />
  </React.StrictMode>
)
