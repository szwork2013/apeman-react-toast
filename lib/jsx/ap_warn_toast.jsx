/**
 * Warn toast.
 * @constructor ApWarnToast
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    types = React.PropTypes,
    ApToast = require('./ap_toast');

/** @lends ApWarnToast */
let ApWarnToast = React.createClass({


    //--------------------
    // Specs
    //--------------------

    propTypes: {
        message: types.string,
        duration: types.number,
        icon: types.string
    },

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {
            items: ''
        };
    },

    getDefaultProps: function () {
        return {
            message: null,
            duration: 2000,
            icon: 'fa fa-warning'
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        return (
            <ApToast className="ap-warn-toast"
                {...props}/>
        )
    }
});

module.exports = ApWarnToast;