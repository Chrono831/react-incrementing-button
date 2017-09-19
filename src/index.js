console.log('running a script!');

for (const n of [1, 2, 5]) {
    console.log(n);
}

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <span>Reacting!</span>,
    document.querySelector('main')
);