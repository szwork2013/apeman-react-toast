"use strict";

const React = require('react'),
    apemanReactToast = require('apeman-react-toast');

const ApToast = apemanReactToast.ApToast,
    ApToastStyle = apemanReactToast.ApToastStyle;

let ExampleComponent = React.createClass({
    render: function () {
        return (
            <div>
                <ApToastStyle scoped></ApToastStyle>
                <ApToast></ApToast>
            </div>
        )
    }
});
