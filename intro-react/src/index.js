import React from 'react'
import { ReactDOM } from 'react'
import "./style.css"




function primeiroJSX() {
    return (
        <div>
            Felipe Matheus
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
         <h1>Ola</h1>
         {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>,rootElement)