"use strict";

const React = require('react'),
    ReactDOM = require('react-dom');

const Demo = require('./demo.component.js');

window.React = React;
let DemoFactory = React.createFactory(Demo);
ReactDOM.render(DemoFactory(), document.getElementById('demo-wrap'));
