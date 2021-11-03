import React from 'react';
import ReactDom from 'react-dom';
import './styles/style.scss';
import { App } from './components/App'


render();
function render(){
   ReactDom.hydrate(<App {...state}/>, document.querySelector('#container'));
}
