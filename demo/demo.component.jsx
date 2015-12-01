"use strict";

const React = require('react');

const ApToast = require('../../lib/ap_toast'),
    ApInfoToast = require('../../lib/ap_info_toast'),
    ApWarnToast = require('../../lib/ap_warn_toast'),
    ApErrorToast = require('../../lib/ap_error_toast'),
    basic = require('apeman-react-basic'),
    ApToastGroup = require('../../lib/ap_toast_group'),
    ApButton = basic.ApButton;

const DISMISS_DURATION = 20 * 1000;
let Demo = React.createClass({
    getInitialState: function () {
        return {
            message: "Demo message 1",
            count: 0
        }
    },
    render: function () {
        let s = this,
            state = s.state;
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <ApButton onTap={s.showToast}>Show toasts</ApButton>
                </div>
                <ApToastGroup>
                    <ApToast message={state.message} duration={DISMISS_DURATION}/>
                    <ApInfoToast message={state.message} duration={DISMISS_DURATION}/>
                    <ApWarnToast message={state.message} duration={DISMISS_DURATION}/>
                    <ApErrorToast message={state.message} duration={DISMISS_DURATION}/>
                </ApToastGroup>
            </div>
        );
    },
    showToast: function () {
        let s = this,
            state = s.state;

        s.setState({
            message: `Demo message ${state.count}`,
            count: state.count + 1
        })
    }
});

module.exports = Demo;