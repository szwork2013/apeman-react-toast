/**
 * Toast components.
 * @constructor ApToast
 */

"use strict";

const React = require('react'),
      extend = require('extend'),
      classnames = require('classnames'),
      types = React.PropTypes,
      ApTouchable = require('apeman-react-touchable')['ApTouchable'],
      ApIcon = require('apeman-react-icon')['ApIcon'];

/** @lends ApToast */
let ApToast = React.createClass({
    displayName: 'ApToast',

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
        return React.createElement(
            'div',
            { className: classnames('ap-toast', props.className, {}),
                style: extend({}, props.style) },
            React.createElement(
                'div',
                { className: 'ap-toast-inner' },
                s._renderToastItem()
            )
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
        s._tickTimer = setTimeout(() => {
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
        return (state.items || '').split(',').map((text, i) => {
            return React.createElement(
                'div',
                { key: `toast-${ i }`, className: 'ap-toast-item' },
                React.createElement(ApIcon, { className: props.icon }),
                React.createElement(
                    'span',
                    { className: 'ap-toast-text' },
                    text
                )
            );
        });
    }
});

module.exports = ApToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF90b2FzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztNQUMxQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7TUFDdkIsV0FBVyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztNQUM5RCxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDOzs7QUFBQyxBQUdwRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0FBTzVCLGFBQVMsRUFBRTtBQUNQLGVBQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNyQixnQkFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3RCLFlBQUksRUFBRSxLQUFLLENBQUMsTUFBTTtLQUNyQjs7QUFFRCxVQUFNLEVBQUUsRUFBRTs7QUFFVixXQUFPLEVBQUUsRUFBRTs7QUFFWCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILGlCQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7S0FDTDs7QUFFRCxtQkFBZSxFQUFFLFlBQVk7QUFDekIsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLG9CQUFRLEVBQUUsSUFBSTtBQUNkLGdCQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7S0FDTDs7QUFFRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLO1lBQ2YsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRXBCLFlBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxLQUFLLEVBQUU7QUFDUixtQkFBTyxJQUFJLENBQUM7U0FDZjtBQUNELGVBQ0k7O2NBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUV2RCxDQUFDLEFBQUM7QUFDRSxxQkFBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxBQUFDO1lBQ2hDOztrQkFBSyxTQUFTLEVBQUMsZ0JBQWdCO2dCQUMxQixDQUFDLENBQUMsZ0JBQWdCLEVBQUU7YUFDbkI7U0FDSixDQUNSO0tBQ0w7Ozs7OztBQU9ELHNCQUFrQixFQUFFLFlBQVk7QUFDNUIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELHFCQUFpQixFQUFFLFlBQVk7QUFDM0IsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3BCLFNBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNqQixTQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5Qjs7QUFFRCw2QkFBeUIsRUFBRSxVQUFVLFNBQVMsRUFBRTtBQUM1QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixTQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQzs7QUFFRCx5QkFBcUIsRUFBRSxVQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDbkQsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCx1QkFBbUIsRUFBRSxVQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDakQsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELHNCQUFrQixFQUFFLFVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNoRCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7O0FBRUQsd0JBQW9CLEVBQUUsWUFBWTtBQUM5QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixTQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbkI7Ozs7O0FBS0QsZ0JBQVksRUFBRSxZQUFZO0FBQ3RCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLG9CQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLFNBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFNBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNkO0FBQ0QsZUFBVyxFQUFFLFlBQVk7QUFDckIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2Isb0JBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0IsU0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdEI7QUFDRCxVQUFNLEVBQUUsWUFBWTtBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJO1lBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDcEIsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTztTQUNWO0FBQ0QsU0FBQyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBSztBQUMzQixhQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDZixhQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZCxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0QjtBQUNELGFBQVMsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUMxQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixZQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsbUJBQU87U0FDVjtBQUNELFlBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFBLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLFlBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQztBQUNwRCxZQUFJLFNBQVMsRUFBRTtBQUNYLG1CQUFPO1NBQ1Y7QUFDRCxTQUFDLENBQUMsUUFBUSxDQUFDO0FBQ1AsaUJBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ047QUFDRCxjQUFVLEVBQUUsWUFBWTtBQUNwQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixZQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQSxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNmLG1CQUFPO1NBQ1Y7QUFDRCxTQUFDLENBQUMsUUFBUSxDQUFDO0FBQ1AsaUJBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ047Ozs7QUFJRCxZQUFRLEVBQUUsS0FBSztBQUNmLGNBQVUsRUFBRSxJQUFJO0FBQ2hCLG9CQUFnQixFQUFFLFlBQVk7QUFDMUIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztZQUNmLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3BCLGVBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQSxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLO0FBQ25ELG1CQUNJOztrQkFBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxFQUFDLENBQUMsQUFBQyxFQUFDLFNBQVMsRUFBQyxlQUFlO2dCQUM3QyxvQkFBQyxNQUFNLElBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEFBQUMsR0FBRTtnQkFDaEM7O3NCQUFNLFNBQVMsRUFBQyxlQUFlO29CQUFFLElBQUk7aUJBQVE7YUFDM0MsQ0FDVDtTQUNKLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6ImFwX3RvYXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LXRvYXN0L2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRvYXN0IGNvbXBvbmVudHMuXG4gKiBAY29uc3RydWN0b3IgQXBUb2FzdFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcyxcbiAgICBBcFRvdWNoYWJsZSA9IHJlcXVpcmUoJ2FwZW1hbi1yZWFjdC10b3VjaGFibGUnKVsnQXBUb3VjaGFibGUnXSxcbiAgICBBcEljb24gPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtaWNvbicpWydBcEljb24nXTtcblxuLyoqIEBsZW5kcyBBcFRvYXN0ICovXG5sZXQgQXBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIG1lc3NhZ2U6IHR5cGVzLnN0cmluZyxcbiAgICAgICAgZHVyYXRpb246IHR5cGVzLm51bWJlcixcbiAgICAgICAgaWNvbjogdHlwZXMuc3RyaW5nXG4gICAgfSxcblxuICAgIG1peGluczogW10sXG5cbiAgICBzdGF0aWNzOiB7fSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6ICcnXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgaWNvbjogbnVsbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBzLnN0YXRlLFxuICAgICAgICAgICAgcHJvcHMgPSBzLnByb3BzO1xuXG4gICAgICAgIGxldCB2YWxpZCA9IHN0YXRlLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdhcC10b2FzdCcsIHByb3BzLmNsYXNzTmFtZSwge1xuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e2V4dGVuZCh7fSwgcHJvcHMuc3R5bGUpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwLXRvYXN0LWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzLl9yZW5kZXJUb2FzdEl0ZW0oKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG4gICAgICAgIHMuc3RhcnRUaWNraW5nKCk7XG4gICAgICAgIHMucHVzaFRvYXN0KHByb3BzLm1lc3NhZ2UpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5wdXNoVG9hc3QobmV4dFByb3BzLm1lc3NhZ2UpO1xuICAgIH0sXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlOiBmdW5jdGlvbiAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5zdG9wVGlja2luZygpO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgc3RhcnRUaWNraW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHMuX3RpY2tUaW1lcik7XG4gICAgICAgIHMuX3RpY2tpbmcgPSB0cnVlO1xuICAgICAgICBzLmRvVGljaygpO1xuICAgIH0sXG4gICAgc3RvcFRpY2tpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBjbGVhclRpbWVvdXQocy5fdGlja1RpbWVyKTtcbiAgICAgICAgcy5fdGlja2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgZG9UaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHByb3BzID0gcy5wcm9wcztcbiAgICAgICAgaWYgKCFzLl90aWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcy5fdGlja1RpbWVyID0gc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHMuc2hpZnRUb2FzdCgpO1xuICAgICAgICAgICAgcy5kb1RpY2soKTtcbiAgICAgICAgfSwgcHJvcHMuZHVyYXRpb24pO1xuICAgIH0sXG4gICAgcHVzaFRvYXN0OiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtcyA9IChzLnN0YXRlLml0ZW1zIHx8ICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICBsZXQgZHVwbGljYXRlID0gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0gPT09IG1lc3NhZ2U7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtcy5jb25jYXQobWVzc2FnZSkuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hpZnRUb2FzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtcyA9IChzLnN0YXRlLml0ZW1zIHx8ICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLnNsaWNlKDEpLmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgX3RpY2tpbmc6IGZhbHNlLFxuICAgIF90aWNrVGltZXI6IG51bGwsXG4gICAgX3JlbmRlclRvYXN0SXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoc3RhdGUuaXRlbXMgfHwgJycpLnNwbGl0KCcsJykubWFwKCh0ZXh0LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgdG9hc3QtJHtpfWB9IGNsYXNzTmFtZT1cImFwLXRvYXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwSWNvbiBjbGFzc05hbWU9e3Byb3BzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXAtdG9hc3QtdGV4dFwiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBUb2FzdDsiXX0=