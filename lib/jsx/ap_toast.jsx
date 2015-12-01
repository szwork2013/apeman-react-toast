/**
 * Toast components.
 * @constructor ApToast
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    types = React.PropTypes,
    ApIcon = require('apeman-react-icon')['ApIcon'];

/** @lends ApToast */
let ApToast = React.createClass({


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

        let valid = state.items.length;
        if (!valid) {
            return null;
        }
        return (
            <div className={classnames('ap-toast', props.className, {

            })}
                 style={extend({}, props.style)}>
                <div className="ap-toast-inner">
                    {s._renderToastItem()}
                </div>
            </div>
        );
    },


    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function () {
        let s = this;
    },

    componentDidMount: function () {
        let s = this,
            props = s.props;
        s.startTicking();
        s.pushToast(props.message);
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
        s.pushToast(nextProps.message);
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        let s = this;
        return true;
    },

    componentWillUpdate: function (nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate: function (prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount: function () {
        let s = this;
        s.stopTicking();
    },

    //------------------
    // Helper
    //------------------
    startTicking: function () {
        let s = this;
        s.clearTimeout(s._tickTimer);
        s._ticking = true;
        s.doTick();
    },
    stopTicking: function () {
        let s = this;
        s.clearTimeout(s._tickTimer);
        s._ticking = false;
    },
    doTick: function () {
        let s = this,
            props = s.props;
        if (!s._ticking) {
            return;
        }
        s._tickTimer = setTimeout(()=> {
            s.shiftToast();
            s.doTick();
        }, props.duration);
    },
    pushToast: function (message) {
        let s = this;
        if (!message) {
            return;
        }
        let items = (s.state.items || '').split(',');
        let duplicate = items[items.length - 1] === message;
        if (duplicate) {
            return;
        }
        s.setState({
            items: items.concat(message).join(',')
        });
    },
    shiftToast: function () {
        let s = this;
        let items = (s.state.items || '').split(',');
        if (!items.length) {
            return;
        }
        s.setState({
            items: items.slice(1).join(',')
        });
    },
    //------------------
    // Private
    //------------------
    _ticking: false,
    _tickTimer: null,
    _renderToastItem: function () {
        let s = this,
            props = s.props,
            state = s.state;
        return (state.items || '').map((text, i) => {
            return (
                <div key={`toast-${i}`} className="ap-toast-item">
                    <ApIcon className={props.icon}/>
                    <span className="ap-toast-text">{text}</span>
                </div>
            )
        });
    }
});

module.exports = ApToast;