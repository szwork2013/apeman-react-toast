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
            icon: null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF93YXJuX3RvYXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7OztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7TUFDMUIsVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTO01BQ3ZCLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUdwQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0FBT2hDLGFBQVMsRUFBRTtBQUNQLGVBQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNyQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLFlBQUksRUFBRSxLQUFLLENBQUMsTUFBTTtLQUNyQjs7QUFFRCxVQUFNLEVBQUUsRUFBRTs7QUFFVixXQUFPLEVBQUUsRUFBRTs7QUFFWCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILGlCQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7S0FDTDs7QUFFRCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLG9CQUFRLEVBQUUsSUFBSTtBQUNkLGdCQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7S0FDTDs7QUFFRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLO1lBQ2YsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLGVBQ0ksb0JBQUMsT0FBTyxhQUFDLFNBQVMsRUFBQyxlQUFlO1dBQzFCLEtBQUssRUFBRyxDQUNuQjtLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6ImFwX3dhcm5fdG9hc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtdG9hc3QvbGliL2pzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybiB0b2FzdC5cbiAqIEBjb25zdHJ1Y3RvciBBcFdhcm5Ub2FzdFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcyxcbiAgICBBcFRvYXN0ID0gcmVxdWlyZSgnLi9hcF90b2FzdCcpO1xuXG4vKiogQGxlbmRzIEFwV2FyblRvYXN0ICovXG5sZXQgQXBXYXJuVG9hc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBtZXNzYWdlOiB0eXBlcy5zdHJpbmcsXG4gICAgICAgIGR1cmF0aW9uOiB0eXBlcy5udW1iZXIsXG4gICAgICAgIGljb246IHR5cGVzLnN0cmluZ1xuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtdLFxuXG4gICAgc3RhdGljczoge30sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiAnJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGljb246IG51bGxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlID0gcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwVG9hc3QgY2xhc3NOYW1lPVwiYXAtd2Fybi10b2FzdFwiXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfS8+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcFdhcm5Ub2FzdDsiXX0=