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
        style: types.object
    },
    getDefaultProps: function () {
        return {
            scoped: false,
            style: {}
        }
    },
    render: function () {
        let s = this,
            props = s.props;
        let data = {
                '.ap-toast': {
                    position: `fixed`,
                    display: `block`,
                    height: `1px`,
                    top: 0,
                    left: 0,
                    right: 0,
                    textAlign: `center`
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
