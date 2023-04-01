import React from 'react';
import ReactDOM from 'react-dom';

const devInfo = {
    name: 'beko',
    age: 16,
    isAuth: true
};

function checkForUser(devInfo) {
    const link = <a href='#'> Opss... </a>;
    
    if(devInfo.isAuth === true) {
        return <h1> Hello, { devInfo.name + ' ' + devInfo.age}! </h1>
    }
    else {
        return link
    }
}

const App = () => {
    return(
        checkForUser(devInfo)
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)