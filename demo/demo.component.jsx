"use strict";

const React = require('react');
const ApToast = require('../../lib/ap_toast');

let Demo = React.createClass({
    render: function () {
        return (
            <div>
                <ApToast></ApToast>
            </div>
        );
    }
});

module.exports = Demo;