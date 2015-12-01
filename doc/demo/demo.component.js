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
    displayName: 'Demo',

    getInitialState: function () {
        return {
            message: "Demo message 1",
            count: 0
        };
    },
    render: function () {
        let s = this,
            state = s.state;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { style: { textAlign: 'center' } },
                React.createElement(
                    ApButton,
                    { onTap: s.showToast },
                    'Show toasts'
                )
            ),
            React.createElement(
                ApToastGroup,
                null,
                React.createElement(ApToast, { message: state.message, duration: DISMISS_DURATION }),
                React.createElement(ApInfoToast, { message: state.message, duration: DISMISS_DURATION }),
                React.createElement(ApWarnToast, { message: state.message, duration: DISMISS_DURATION }),
                React.createElement(ApErrorToast, { message: state.message, duration: DISMISS_DURATION })
            )
        );
    },
    showToast: function () {
        let s = this,
            state = s.state;

        s.setState({
            message: `Demo message ${ state.count }`,
            count: state.count + 1
        });
    }
});

module.exports = Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUvQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUM7TUFDekMsV0FBVyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztNQUNoRCxXQUFXLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDO01BQ2hELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7TUFDbEQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNyQyxZQUFZLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO01BQ2xELFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDOztBQUU5QixNQUFNLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3pCLG1CQUFlLEVBQUUsWUFBWTtBQUN6QixlQUFPO0FBQ0gsbUJBQU8sRUFBRSxnQkFBZ0I7QUFDekIsaUJBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQTtLQUNKO0FBQ0QsVUFBTSxFQUFFLFlBQVk7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3BCLGVBQ0k7OztZQUNJOztrQkFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEFBQUM7Z0JBQzdCO0FBQUMsNEJBQVE7c0JBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLEFBQUM7O2lCQUF1QjthQUNsRDtZQUNOO0FBQUMsNEJBQVk7O2dCQUNULG9CQUFDLE9BQU8sSUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQUFBQyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQUFBQyxHQUFFO2dCQUM5RCxvQkFBQyxXQUFXLElBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEFBQUMsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEFBQUMsR0FBRTtnQkFDbEUsb0JBQUMsV0FBVyxJQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxBQUFDLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixBQUFDLEdBQUU7Z0JBQ2xFLG9CQUFDLFlBQVksSUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQUFBQyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQUFBQyxHQUFFO2FBQ3hEO1NBQ2IsQ0FDUjtLQUNMO0FBQ0QsYUFBUyxFQUFFLFlBQVk7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSTtZQUNSLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztBQUVwQixTQUFDLENBQUMsUUFBUSxDQUFDO0FBQ1AsbUJBQU8sRUFBRSxDQUFDLGFBQWEsR0FBRSxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUM7QUFDdEMsaUJBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7U0FDekIsQ0FBQyxDQUFBO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpdGFrYS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbGFiby9hcGVtYW4tcmVhY3QtdG9hc3QvZG9jL2RlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBBcFRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX3RvYXN0JyksXG4gICAgQXBJbmZvVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfaW5mb190b2FzdCcpLFxuICAgIEFwV2FyblRvYXN0ID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX3dhcm5fdG9hc3QnKSxcbiAgICBBcEVycm9yVG9hc3QgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfZXJyb3JfdG9hc3QnKSxcbiAgICBiYXNpYyA9IHJlcXVpcmUoJ2FwZW1hbi1yZWFjdC1iYXNpYycpLFxuICAgIEFwVG9hc3RHcm91cCA9IHJlcXVpcmUoJy4uLy4uL2xpYi9hcF90b2FzdF9ncm91cCcpLFxuICAgIEFwQnV0dG9uID0gYmFzaWMuQXBCdXR0b247XG5cbmNvbnN0IERJU01JU1NfRFVSQVRJT04gPSAyMCAqIDEwMDA7XG5sZXQgRGVtbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVtbyBtZXNzYWdlIDFcIixcbiAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZSA9IHMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFwQnV0dG9uIG9uVGFwPXtzLnNob3dUb2FzdH0+U2hvdyB0b2FzdHM8L0FwQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxBcFRvYXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxBcFRvYXN0IG1lc3NhZ2U9e3N0YXRlLm1lc3NhZ2V9IGR1cmF0aW9uPXtESVNNSVNTX0RVUkFUSU9OfS8+XG4gICAgICAgICAgICAgICAgICAgIDxBcEluZm9Ub2FzdCBtZXNzYWdlPXtzdGF0ZS5tZXNzYWdlfSBkdXJhdGlvbj17RElTTUlTU19EVVJBVElPTn0vPlxuICAgICAgICAgICAgICAgICAgICA8QXBXYXJuVG9hc3QgbWVzc2FnZT17c3RhdGUubWVzc2FnZX0gZHVyYXRpb249e0RJU01JU1NfRFVSQVRJT059Lz5cbiAgICAgICAgICAgICAgICAgICAgPEFwRXJyb3JUb2FzdCBtZXNzYWdlPXtzdGF0ZS5tZXNzYWdlfSBkdXJhdGlvbj17RElTTUlTU19EVVJBVElPTn0vPlxuICAgICAgICAgICAgICAgIDwvQXBUb2FzdEdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICBzaG93VG9hc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAgc3RhdGUgPSBzLnN0YXRlO1xuXG4gICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogYERlbW8gbWVzc2FnZSAke3N0YXRlLmNvdW50fWAsXG4gICAgICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxXG4gICAgICAgIH0pXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVtbzsiXX0=