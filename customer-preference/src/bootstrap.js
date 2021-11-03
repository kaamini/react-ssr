import React from 'react';
import ReactDom from 'react-dom';
import './styles/style.scss';
import { App } from './components/App'

let state = undefined;
fetch("http://localhost:3002/preference")
.then(data => data.json())
.then(json => {
    state = json;
    console.log("got the edtate", state);
    render();
})

function render(){
   ReactDom.hydrate(<App {...state}/>, document.querySelector('#container'));
}
