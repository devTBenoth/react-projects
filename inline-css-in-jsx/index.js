import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        /* Creating Div */
       React.createElement(
        'div', { className: 'formDiv'},
            /* Creating Label */ 
            React.createElement('label', 
                { htmlFor: 'name', className: 'label', style: { fontSize: '30px', display: 'block', fontWeight: '600'}}, "Enter Name: "),
            /* Creating Input*/    
            React.createElement('input', 
                { id: 'name', type: 'text', style: { color: '#fff', backgroundColor: "#000"}}),
            /* Creating Button */    
            React.createElement('button', 
                {type: 'submit', value: 'submitEvent', style: { marginLeft: '15px', fontWeight: '600'}}, "Send!")
       )
    )
}

/* 
    The html version of this code is a follow: 
    <div class="formDiv">
        <label for="name" class="label" style="font-size: 30px; display: block; font-weight: 600"> Enter Name </label>
        <input id="name" type="text" style="color: #fff; background-color: #000;" />
        <button type="submit" value="submitEvent" style="margin-left: 15px; font-weight: 600"> Send! </button>
    </div>

*/

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)