"use strict";

const React = require('react'),
      pkg = require('../../package.json'),
      links = require('../links.json'),
      fs = require('fs'),
      apeHighlighting = require('ape-highlighting'),
      highlightJsx = apeHighlighting.highlightJsx,
      stylesheets = require('apeman-asset-stylesheets');

const Demo = require('./demo.component.js'),
      ApToastStyle = require('../../lib/ap_toast_style'),
      ApThemeStyle = require('apeman-react-theme')['ApThemeStyle'],
      basic = require('apeman-react-basic'),
      ApStyle = basic.ApStyle,
      ApHead = basic.ApHead,
      ApBody = basic.ApBody,
      ApLinks = basic.ApLinks,
      ApHtml = basic.ApHtml;

const FAVICON_URL = "https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png";

module.exports = React.createElement(
    ApHtml,
    { className: 'react-demo' },
    React.createElement(
        ApHead,
        { charset: 'UTF-8',
            title: pkg.name + ' Demo',
            version: pkg.version,
            icon: FAVICON_URL },
        React.createElement(ApStyle, { data: fs.readFileSync(stylesheets.reactDemo).toString() }),
        React.createElement(ApThemeStyle, { primaryColor: '#b35600' }),
        React.createElement(ApToastStyle, null)
    ),
    React.createElement(
        ApBody,
        null,
        React.createElement('div', { id: 'demo-style' }),
        React.createElement(
            'header',
            { className: 'react-demo-header' },
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'h1',
                    null,
                    React.createElement(
                        'a',
                        { href: pkg.homepage },
                        pkg.name
                    )
                )
            )
        ),
        React.createElement(
            'main',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'react-demo-playground' },
                    React.createElement(
                        'div',
                        { className: 'react-demo-container' },
                        React.createElement(
                            'div',
                            { id: 'demo-wrap' },
                            React.createElement(Demo, null)
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('pre', { className: 'react-demo-src', dangerouslySetInnerHTML: { __html: highlightJsx.fromFile(require.resolve('./demo.component.jsx')) } })
                )
            )
        ),
        React.createElement(
            'footer',
            null,
            React.createElement(
                'div',
                { className: 'react-demo-container' },
                React.createElement(ApLinks, { links: links })
            )
        ),
        React.createElement('script', { src: './demo.js' })
    )
);
//# sourceMappingURL=data:application/json;base64,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Um9vdCI6Ii9Vc2Vycy9va3VuaXNoaXRha2EvcHJvamVjdHMvYXBlbWFuLXJlYWN0LWxhYm8vYXBlbWFuLXJlYWN0LXRvYXN0L2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKSxcbiAgICBsaW5rcyA9IHJlcXVpcmUoJy4uL2xpbmtzLmpzb24nKSxcbiAgICBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBlSGlnaGxpZ2h0aW5nID0gcmVxdWlyZSgnYXBlLWhpZ2hsaWdodGluZycpLFxuICAgIGhpZ2hsaWdodEpzeCA9IGFwZUhpZ2hsaWdodGluZy5oaWdobGlnaHRKc3gsXG4gICAgc3R5bGVzaGVldHMgPSByZXF1aXJlKCdhcGVtYW4tYXNzZXQtc3R5bGVzaGVldHMnKTtcblxuY29uc3QgRGVtbyA9IHJlcXVpcmUoJy4vZGVtby5jb21wb25lbnQuanMnKSxcbiAgICBBcFRvYXN0U3R5bGUgPSByZXF1aXJlKCcuLi8uLi9saWIvYXBfdG9hc3Rfc3R5bGUnKSxcbiAgICBBcFRoZW1lU3R5bGUgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtdGhlbWUnKVsnQXBUaGVtZVN0eWxlJ10sXG4gICAgYmFzaWMgPSByZXF1aXJlKCdhcGVtYW4tcmVhY3QtYmFzaWMnKSxcbiAgICBBcFN0eWxlID0gYmFzaWMuQXBTdHlsZSxcbiAgICBBcEhlYWQgPSBiYXNpYy5BcEhlYWQsXG4gICAgQXBCb2R5ID0gYmFzaWMuQXBCb2R5LFxuICAgIEFwTGlua3MgPSBiYXNpYy5BcExpbmtzLFxuICAgIEFwSHRtbCA9IGJhc2ljLkFwSHRtbDtcblxuY29uc3QgRkFWSUNPTl9VUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcGVtYW4tYXNzZXQtbGFiby9hcGVtYW4tYXNzZXQtaW1hZ2VzL21hc3Rlci9kaXN0L2Zhdmljb24vcmVhY3QtZmF2aWNvbi5wbmdcIjtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gICAgPEFwSHRtbCBjbGFzc05hbWU9XCJyZWFjdC1kZW1vXCI+XG4gICAgICAgIDxBcEhlYWQgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17cGtnLm5hbWUgKyAnIERlbW8nfVxuICAgICAgICAgICAgICAgIHZlcnNpb249e3BrZy52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIGljb249e0ZBVklDT05fVVJMfT5cbiAgICAgICAgICAgIDxBcFN0eWxlIGRhdGE9e2ZzLnJlYWRGaWxlU3luYyhzdHlsZXNoZWV0cy5yZWFjdERlbW8pLnRvU3RyaW5nKCl9PjwvQXBTdHlsZT5cbiAgICAgICAgICAgIDxBcFRoZW1lU3R5bGUgcHJpbWFyeUNvbG9yPVwiI2IzNTYwMFwiPjwvQXBUaGVtZVN0eWxlPlxuICAgICAgICAgICAgPEFwVG9hc3RTdHlsZT48L0FwVG9hc3RTdHlsZT5cbiAgICAgICAgPC9BcEhlYWQ+XG4gICAgICAgIDxBcEJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJkZW1vLXN0eWxlXCI+PC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BrZy5ob21lcGFnZX0+e3BrZy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXBsYXlncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlbW8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vPjwvRGVtbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG48cHJlIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tc3JjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e1xue19faHRtbDpoaWdobGlnaHRKc3guZnJvbUZpbGUocmVxdWlyZS5yZXNvbHZlKCcuL2RlbW8uY29tcG9uZW50LmpzeCcpKX1cbn0+XG48L3ByZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QXBMaW5rcyBsaW5rcz17bGlua3N9PjwvQXBMaW5rcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2RlbW8uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9BcEJvZHk+XG4gICAgPC9BcEh0bWw+XG4pO1xuIl19