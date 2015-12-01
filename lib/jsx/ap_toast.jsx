/**
 * Toast components.
 * @constructor ApToast
 */

"use strict";

const React = require('react'),
    extend = require('extend'),
    classnames = require('classnames'),
    arrayfilter = require('arrayfilter'),
    types = React.PropTypes,
    ApTouchable = require('apeman-react-touchable')['ApTouchable'],
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

    statics: {
        itemJoiner: '____'
    },

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
        s.pushToastItem(props.message);
    },

    componentWillReceiveProps: function (nextProps) {
        let s = this;
        s.pushToastItem(nextProps.message);
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
        clearTimeout(s._tickTimer);
        s._ticking = true;
        s.doTick();
    },
    stopTicking: function () {
        let s = this;
        clearTimeout(s._tickTimer);
        s._ticking = false;
    },
    doTick: function () {
        let s = this,
            props = s.props;
        if (!s._ticking) {
            return;
        }
        s._tickTimer = setTimeout(()=> {
            s.shiftToastItem();
            s.doTick();
        }, props.duration);
    },
    pushToastItem: function (message) {
        let s = this;
        if (!message) {
            return;
        }
        let items = (s.state.items || '').split(ApToast.itemJoiner);
        let duplicate = items[items.length - 1] === message;
        if (duplicate) {
            return;
        }
        s.setState({
            items: items.concat(message).join(ApToast.itemJoiner)
        });
    },
    shiftToastItem: function () {
        let s = this;
        let items = (s.state.items || '').split(ApToast.itemJoiner);
        if (!items.length) {
            return;
        }
        s.setState({
            items: items.slice(1).join(ApToast.itemJoiner)
        });
    },
    dismissToastItem: function (message) {
        let s = this;
        let items = (s.state.items || '').split(ApToast.itemJoiner);
        s.setState({
            items: items.filter((filtering)=> {
                return filtering != message;
            }).join(ApToast.itemJoiner)
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
        return (state.items || '').split(ApToast.itemJoiner).filter(arrayfilter.emptyReject()).map((text, i) => {
            return (
                <div key={`toast-${text}`}>
                    <ApTouchable onTap={()=>s.dismissToastItem(text)}>
                        <div className="ap-toast-item">
                            <ApIcon className={classnames('ap-toast-item-icon', props.icon)}/>
                            <span className="ap-toast-text">{text}</span>
                        </div>
                    </ApTouchable>
                </div>
            )
        });
    }
});

module.exports = ApToast;