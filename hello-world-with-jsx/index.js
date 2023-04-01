import React from 'react';
import ReactDOM from 'react-dom';

/* Function kullanılarak bir App adında bir component oluşturuluyor.*/
const App = () => {
    return(
        /* component içerisinde bir return bulunmak zorunda. JSX kodları yazmak için return kullanılır.*/
        React.createElement("div", null,
        React.createElement("h2", null, "beko"))
    )
}

/* Component'in browser'da gözükmesi için ReactDom.render kullanılır. */
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)