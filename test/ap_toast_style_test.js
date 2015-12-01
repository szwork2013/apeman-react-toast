/**
 * Test case for apToastStyle.
 * Runs with mocha.
 */
"use strict";

const ApToastStyle = require('../lib/ap_toast_style.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-toast-style', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Render style component', (done) => {
        let style = ReactDOM.renderToString(
            React.createElement(ApToastStyle, {})
        );
        console.log(style);
        assert.ok(style);
        done();
    });
});

