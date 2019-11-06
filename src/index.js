// Import the React and ReactDOM libraries
// 'import' syntax is part of ES2015 Modules syntax

import React from 'react';

import ReactDOM from 'react-dom';

// Create React Component

const App = () => {
    return <div>Hi there!</div>
}

// Take the React Component and show it on the Screen



ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)