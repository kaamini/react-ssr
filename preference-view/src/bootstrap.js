import React from 'react';
import ReactDom from 'react-dom';
import './styles/style.scss';
import { App } from './components/App'


function render(){
   ReactDom.hydrate(<App/>, document.querySelector('#container'));
}
render();