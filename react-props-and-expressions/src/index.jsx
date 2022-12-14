import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

root.render(element);
