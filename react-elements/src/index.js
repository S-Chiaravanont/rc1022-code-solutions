import React from 'react';
import ReactDOM from 'react-dom/client';

const firstElement = React.createElement('h1', null, 'Hello, React!');
console.log(firstElement);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(firstElement);
