/**
 * Error toast.
 * @constructor ApErrorToast
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    types = React.PropTypes,
    ApToast = require('./ap_toast');

/** @lends ApErrorToast */
let ApErrorToast = React.createClass({


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
            icon: null
        };
    },

    render: function () {
        let s = this,
            state = s.state,
            props = s.props;

        return (
            <ApToast className="ap-error-toast"
                {...props}/>
        )
    }
});

module.exports = ApErrorToast;