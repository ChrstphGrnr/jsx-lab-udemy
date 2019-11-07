// Import the React and ReactDOM libraries
// 'import' syntax is part of ES2015 Modules syntax

import React from 'react';

import ReactDOM from 'react-dom';

// Create React Component

const getButtonText = () => {
    return "Submit THIS!"
}

const App = () => {
    
    
    return (
        <div>
        <label className="label" for="name"> Enter Name </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {getButtonText()}
        </button>
        </div>
    );
}

// Take the React Component and show it on the Screen



ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)