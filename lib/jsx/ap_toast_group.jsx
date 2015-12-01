/**
 * Toast group.
 * @constructor ApToastGroup
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    types = React.PropTypes;

/** @lends ApToastGroup */
let ApToastGroup = React.createClass({


    //--------------------
    // Specs
    //--------------------

    propTypes: {
    },

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {
        };
    },

    getDefaultProps: function () {
        return {
        };
    },

    render: function () {
        let s = this,
            props = s.props;

        return (
            <div className={classnames('ap-toast-group', props.className)}>
                {props.children}
            </div>
        );
    }
});

module.exports = ApToastGroup;