import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

function buttonText() {
    return 'Click me Bro!';
}

const App = () => {
    const textMsg = { text: 'bekoo'};
    return(
        React.createElement('div', null, '', textMsg.text),
        React.createElement('div', null, '', buttonText())
    )
}

/* 

    The html version of this code is a follow: 
    <div> textMsg.text </div>
    <div> buttonText </div>
    
*/

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)