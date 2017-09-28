console.log('running a script!');

for (const n of [1, 2, 5]) {
    console.log(n);
}

import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(
    <App/>,
    document.querySelector('main')
);