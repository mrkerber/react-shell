//main entry point for application
//from here calls other components to build application
var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));
