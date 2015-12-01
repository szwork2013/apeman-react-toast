/**
 * Error toast.
 * @constructor ApErrorToast
 */

"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const React = require('react'),
      extend = require('extend'),
      classnames = require('classnames'),
      types = React.PropTypes,
      ApToast = require('./ap_toast');

/** @lends ApErrorToast */
let ApErrorToast = React.createClass({
    displayName: 'ApErrorToast',

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

        return React.createElement(ApToast, _extends({ className: 'ap-error-toast'
        }, props));
    }
});

module.exports = ApErrorToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF9lcnJvcl90b2FzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7QUFFYixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQzFCLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO01BQzFCLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUztNQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQzs7O0FBQUMsQUFHcEMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztBQU9qQyxhQUFTLEVBQUU7QUFDUCxlQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU07QUFDckIsZ0JBQVEsRUFBRSxLQUFLLENBQUMsTUFBTTtBQUN0QixZQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU07S0FDckI7O0FBRUQsVUFBTSxFQUFFLEVBQUU7O0FBRVYsV0FBTyxFQUFFLEVBQUU7O0FBRVgsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCxpQkFBSyxFQUFFLEVBQUU7U0FDWixDQUFDO0tBQ0w7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU87QUFDSCxtQkFBTyxFQUFFLElBQUk7QUFDYixvQkFBUSxFQUFFLElBQUk7QUFDZCxnQkFBSSxFQUFFLElBQUk7U0FDYixDQUFDO0tBQ0w7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztZQUNmLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixlQUNJLG9CQUFDLE9BQU8sYUFBQyxTQUFTLEVBQUMsZ0JBQWdCO1dBQzNCLEtBQUssRUFBRyxDQUNuQjtLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDIiwiZmlsZSI6ImFwX2Vycm9yX3RvYXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LXRvYXN0L2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEVycm9yIHRvYXN0LlxuICogQGNvbnN0cnVjdG9yIEFwRXJyb3JUb2FzdFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcyxcbiAgICBBcFRvYXN0ID0gcmVxdWlyZSgnLi9hcF90b2FzdCcpO1xuXG4vKiogQGxlbmRzIEFwRXJyb3JUb2FzdCAqL1xubGV0IEFwRXJyb3JUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG1lc3NhZ2U6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgZHVyYXRpb246IHR5cGVzLm51bWJlcixcbiAgICAgICAgaWNvbjogdHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIG1peGluczogW10sXG5cbiAgICBzdGF0aWNzOiB7fSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6ICcnXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBzLnN0YXRlLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBUb2FzdCBjbGFzc05hbWU9XCJhcC1lcnJvci10b2FzdFwiXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfS8+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcEVycm9yVG9hc3Q7Il19