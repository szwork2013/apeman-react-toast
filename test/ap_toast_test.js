/**
 * Test case for apToast.
 * Runs with mocha.
 */
"use strict";

const ApToast = require('../lib/ap_toast.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-toast', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Render component.', (done) => {
        let html = ReactDOM.renderToString(
            React.createElement('div',
                {},
                React.createElement(ApToast, {})
            )
        );
        console.log(html);
        assert.ok(html);
        done();
    });
});

