// Import the React and ReactDOM libraries
// 'import' syntax is part of ES2015 Modules syntax

import React from 'react';

import ReactDOM from 'react-dom';

// Create React Component



const App = () => {
    const buttonText = {text: 'Click ME!'}
    const labelText = "Enter Name"
    return (
        <div>
        <label className="label" htmlFor="name"> {labelText}</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button>
        </div>
    );
}

// Take the React Component and show it on the Screen



ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)