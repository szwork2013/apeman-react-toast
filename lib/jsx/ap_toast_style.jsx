/**
 * Style for ApToast.
 * @constructor ApToastStyle
 */

"use strict";

const React = require('react'),
    types = React.PropTypes,
    extend = require('extend'),
    ApStyle = require('apeman-react-style')['ApStyle'];

/** @lends ApToastStyle */
let ApToastStyle = React.createClass({
    propTypes: {
        scoped: types.bool,
        style: types.object,
        normalColor: types.string,
        infoColor: types.string,
        warnColor: types.string,
        errorColor: types.string
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {},
            normalColor: '#555',
            infoColor: '#17B917',
            warnColor: '#929211',
            errorColor: '#B31818'
        }
    },
    render: function () {
        let s = this,
            props = s.props;

        let normalColor = props.normalColor,
            infoColor = props.infoColor,
            warnColor = props.warnColor,
            errorColor = props.errorColor;

        let data = {
                '.ap-toast-group': {
                    position: `fixed`,
                    display: `block`,
                    height: `1px`,
                    top: 0,
                    left: 0,
                    right: 0,
                    textAlign: `center`,
                    padding: `4px 0`
                },
                '.ap-toast': {
                    display: `block`,
                    margin: `0 auto`
                },
                '.ap-toast-inner': {
                    margin: `4px auto`,
                    maxWidth: `420px`,
                    display: `inline-block`,
                    textAlign: `left`,
                    padding: `2px 4px`,
                    boxShadow: `1px 1px 2px rgba(0,0,0,0.33)`,
                    backgroundColor: `rgba(255, 255, 255, 0.8)`,
                    color: `${normalColor}`,
                    border: `1px solid ${normalColor}`,
                    fontSize: `14px`,
                    width: `240px`
                },
                '.ap-toast-item': {
                    display: `block`,
                    padding: `2px 0`
                },
                '.ap-toast-item:active': {
                    opacity: 0.8
                },
                '.ap-info-toast .ap-toast-inner': {
                    color: `${infoColor}`,
                    border: `1px solid ${infoColor}`
                },
                '.ap-warn-toast .ap-toast-inner': {
                    color: `${warnColor}`,
                    border: `1px solid ${warnColor}`
                },
                '.ap-error-toast .ap-toast-inner': {
                    color: `${errorColor}`,
                    border: `1px solid ${errorColor}`
                },
                '.ap-toast-item-icon': {
                    display: `inline-block`
                },
                '.ap-toast-text': {
                    display: `inline-block`,
                    margin: `0 2px`,
                    cursor: `default`
                }
            },
            smallMediaData = {},
            mediumMediaData = {},
            largeMediaData = {};
        return (
            <ApStyle scoped={props.scoped}
                     data={extend(data, props.style)}
                     smallMediaData={smallMediaData}
                     mediumMediaData={mediumMediaData}
                     largeMediaData={largeMediaData}
            >{props.children}</ApStyle>
        );
    }
});

module.exports = ApToastStyle;
