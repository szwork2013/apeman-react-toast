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
    displayName: 'ApToastGroup',

    //--------------------
    // Specs
    //--------------------

    propTypes: {},

    mixins: [],

    statics: {},

    getInitialState: function () {
        return {};
    },

    getDefaultProps: function () {
        return {};
    },

    render: function () {
        let s = this,
            props = s.props;

        return React.createElement(
            'div',
            { className: classnames('ap-toast-group', props.className) },
            props.children
        );
    }
});

module.exports = ApToastGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC9hcF90b2FzdF9ncm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUMxQixNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztNQUMxQixVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVM7OztBQUFDLEFBRzVCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7QUFPakMsYUFBUyxFQUFFLEVBQ1Y7O0FBRUQsVUFBTSxFQUFFLEVBQUU7O0FBRVYsV0FBTyxFQUFFLEVBQUU7O0FBRVgsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFDTixDQUFDO0tBQ0w7O0FBRUQsbUJBQWUsRUFBRSxZQUFZO0FBQ3pCLGVBQU8sRUFDTixDQUFDO0tBQ0w7O0FBRUQsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixlQUNJOztjQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDO1lBQ3pELEtBQUssQ0FBQyxRQUFRO1NBQ2IsQ0FDUjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDIiwiZmlsZSI6ImFwX3RvYXN0X2dyb3VwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LXRvYXN0L2xpYi9qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRvYXN0IGdyb3VwLlxuICogQGNvbnN0cnVjdG9yIEFwVG9hc3RHcm91cFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyksXG4gICAgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKSxcbiAgICB0eXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqIEBsZW5kcyBBcFRvYXN0R3JvdXAgKi9cbmxldCBBcFRvYXN0R3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtdLFxuXG4gICAgc3RhdGljczoge30sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBwcm9wcyA9IHMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdhcC10b2FzdC1ncm91cCcsIHByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwVG9hc3RHcm91cDsiXX0=