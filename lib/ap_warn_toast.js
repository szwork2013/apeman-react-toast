/**
 * Warn toast.
 * @constructor ApWarnToast
 */

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const React = require('react'),
      extend = require('extend'),
      classnames = require('classnames'),
      types = React.PropTypes,
      ApToast = require('./ap_toast');

/** @lends ApWarnToast */
let ApWarnToast = React.createClass({
    displayName: 'ApWarnToast',

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

        return React.createElement(ApToast, _extends({ className: 'ap-warn-toast'
        }, props));
    }
});

module.exports = ApWarnToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF93YXJuX3RvYXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7TUFDMUIsVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTO01BQ3ZCLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUdwQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0FBT2hDLGFBQVMsRUFBRTtBQUNQLGVBQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNyQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLFlBQUksRUFBRSxLQUFLLENBQUMsTUFBTTtLQUNyQjs7QUFFRCxVQUFNLEVBQUUsRUFBRTs7QUFFVixXQUFPLEVBQUUsRUFBRTs7QUFFWCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILGlCQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7S0FDTDs7QUFFRCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLG9CQUFRLEVBQUUsSUFBSTtBQUNkLGdCQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFDO0tBQ0w7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztZQUNmLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixlQUNJLG9CQUFDLE9BQU8sYUFBQyxTQUFTLEVBQUMsZUFBZTtXQUMxQixLQUFLLEVBQUcsQ0FDbkI7S0FDSjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyIsImZpbGUiOiJhcF93YXJuX3RvYXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LXRvYXN0L2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm4gdG9hc3QuXG4gKiBAY29uc3RydWN0b3IgQXBXYXJuVG9hc3RcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpLFxuICAgIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyksXG4gICAgdHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXMsXG4gICAgQXBUb2FzdCA9IHJlcXVpcmUoJy4vYXBfdG9hc3QnKTtcblxuLyoqIEBsZW5kcyBBcFdhcm5Ub2FzdCAqL1xubGV0IEFwV2FyblRvYXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbWVzc2FnZTogdHlwZXMuc3RyaW5nLFxuICAgICAgICBkdXJhdGlvbjogdHlwZXMubnVtYmVyLFxuICAgICAgICBpY29uOiB0eXBlcy5zdHJpbmdcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXSxcblxuICAgIHN0YXRpY3M6IHt9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogJydcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtd2FybmluZydcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlID0gcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwVG9hc3QgY2xhc3NOYW1lPVwiYXAtd2Fybi10b2FzdFwiXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfS8+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcFdhcm5Ub2FzdDsiXX0=