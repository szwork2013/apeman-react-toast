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
      ApFaIconStyle = require('apeman-react-icon')['ApFaIconStyle'],
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
        React.createElement(ApFaIconStyle, null),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uaHRtbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDMUIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNuQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUNoQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztNQUNsQixlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO01BQzdDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWTtNQUMzQyxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXRELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztNQUN2QyxZQUFZLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO01BQ2xELFlBQVksR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxjQUFjLENBQUM7TUFDNUQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUNyQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87TUFDdkIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQztNQUM3RCxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07TUFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO01BQ3JCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztNQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsTUFBTSxXQUFXLEdBQUcsK0dBQStHLENBQUM7O0FBRXBJLE1BQU0sQ0FBQyxPQUFPLEdBQ1Y7QUFBQyxVQUFNO01BQUMsU0FBUyxFQUFDLFlBQVk7SUFDMUI7QUFBQyxjQUFNO1VBQUMsT0FBTyxFQUFDLE9BQU87QUFDZixpQkFBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxBQUFDO0FBQzFCLG1CQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQUFBQztBQUNyQixnQkFBSSxFQUFFLFdBQVcsQUFBQztRQUN0QixvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxBQUFDLEdBQVc7UUFDNUUsb0JBQUMsYUFBYSxPQUFpQjtRQUMvQixvQkFBQyxZQUFZLElBQUMsWUFBWSxFQUFDLFNBQVMsR0FBZ0I7UUFDcEQsb0JBQUMsWUFBWSxPQUFnQjtLQUN4QjtJQUNUO0FBQUMsY0FBTTs7UUFDUCw2QkFBSyxFQUFFLEVBQUMsWUFBWSxHQUFPO1FBQzNCOztjQUFRLFNBQVMsRUFBQyxtQkFBbUI7WUFDakM7O2tCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDOzs7b0JBQ0k7OzBCQUFHLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxBQUFDO3dCQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUFLO2lCQUNwQzthQUNIO1NBQ0Q7UUFDVDs7O1lBQ0k7OztnQkFDSTs7c0JBQUssU0FBUyxFQUFDLHVCQUF1QjtvQkFDbEM7OzBCQUFLLFNBQVMsRUFBQyxzQkFBc0I7d0JBQ2pDOzs4QkFBSyxFQUFFLEVBQUMsV0FBVzs0QkFDZixvQkFBQyxJQUFJLE9BQVE7eUJBQ1g7cUJBQ0o7aUJBQ0o7YUFDSjtZQUNOOztrQkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQzs7O29CQUNoQiw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLEVBQ3ZELEVBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUMsQUFDdEUsR0FDSztpQkFDZ0I7YUFDSjtTQUVIO1FBQ1A7OztZQUNJOztrQkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQyxvQkFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLEtBQUssQUFBQyxHQUFXO2FBQy9CO1NBQ0Q7UUFDVCxnQ0FBUSxHQUFHLEVBQUMsV0FBVyxHQUFVO0tBQ3hCO0NBQ0osQUFDWixDQUFDIiwiZmlsZSI6ImRlbW8uaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGl0YWthL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1sYWJvL2FwZW1hbi1yZWFjdC10b2FzdC9kb2MvZGVtbyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyksXG4gICAgbGlua3MgPSByZXF1aXJlKCcuLi9saW5rcy5qc29uJyksXG4gICAgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgIGFwZUhpZ2hsaWdodGluZyA9IHJlcXVpcmUoJ2FwZS1oaWdobGlnaHRpbmcnKSxcbiAgICBoaWdobGlnaHRKc3ggPSBhcGVIaWdobGlnaHRpbmcuaGlnaGxpZ2h0SnN4LFxuICAgIHN0eWxlc2hlZXRzID0gcmVxdWlyZSgnYXBlbWFuLWFzc2V0LXN0eWxlc2hlZXRzJyk7XG5cbmNvbnN0IERlbW8gPSByZXF1aXJlKCcuL2RlbW8uY29tcG9uZW50LmpzJyksXG4gICAgQXBUb2FzdFN0eWxlID0gcmVxdWlyZSgnLi4vLi4vbGliL2FwX3RvYXN0X3N0eWxlJyksXG4gICAgQXBUaGVtZVN0eWxlID0gcmVxdWlyZSgnYXBlbWFuLXJlYWN0LXRoZW1lJylbJ0FwVGhlbWVTdHlsZSddLFxuICAgIGJhc2ljID0gcmVxdWlyZSgnYXBlbWFuLXJlYWN0LWJhc2ljJyksXG4gICAgQXBTdHlsZSA9IGJhc2ljLkFwU3R5bGUsXG4gICAgQXBGYUljb25TdHlsZSA9IHJlcXVpcmUoJ2FwZW1hbi1yZWFjdC1pY29uJylbJ0FwRmFJY29uU3R5bGUnXSxcbiAgICBBcEhlYWQgPSBiYXNpYy5BcEhlYWQsXG4gICAgQXBCb2R5ID0gYmFzaWMuQXBCb2R5LFxuICAgIEFwTGlua3MgPSBiYXNpYy5BcExpbmtzLFxuICAgIEFwSHRtbCA9IGJhc2ljLkFwSHRtbDtcblxuY29uc3QgRkFWSUNPTl9VUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcGVtYW4tYXNzZXQtbGFiby9hcGVtYW4tYXNzZXQtaW1hZ2VzL21hc3Rlci9kaXN0L2Zhdmljb24vcmVhY3QtZmF2aWNvbi5wbmdcIjtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gICAgPEFwSHRtbCBjbGFzc05hbWU9XCJyZWFjdC1kZW1vXCI+XG4gICAgICAgIDxBcEhlYWQgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17cGtnLm5hbWUgKyAnIERlbW8nfVxuICAgICAgICAgICAgICAgIHZlcnNpb249e3BrZy52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIGljb249e0ZBVklDT05fVVJMfT5cbiAgICAgICAgICAgIDxBcFN0eWxlIGRhdGE9e2ZzLnJlYWRGaWxlU3luYyhzdHlsZXNoZWV0cy5yZWFjdERlbW8pLnRvU3RyaW5nKCl9PjwvQXBTdHlsZT5cbiAgICAgICAgICAgIDxBcEZhSWNvblN0eWxlPjwvQXBGYUljb25TdHlsZT5cbiAgICAgICAgICAgIDxBcFRoZW1lU3R5bGUgcHJpbWFyeUNvbG9yPVwiI2IzNTYwMFwiPjwvQXBUaGVtZVN0eWxlPlxuICAgICAgICAgICAgPEFwVG9hc3RTdHlsZT48L0FwVG9hc3RTdHlsZT5cbiAgICAgICAgPC9BcEhlYWQ+XG4gICAgICAgIDxBcEJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJkZW1vLXN0eWxlXCI+PC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BrZy5ob21lcGFnZX0+e3BrZy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLXBsYXlncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlbW8td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vPjwvRGVtbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG48cHJlIGNsYXNzTmFtZT1cInJlYWN0LWRlbW8tc3JjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e1xue19faHRtbDpoaWdobGlnaHRKc3guZnJvbUZpbGUocmVxdWlyZS5yZXNvbHZlKCcuL2RlbW8uY29tcG9uZW50LmpzeCcpKX1cbn0+XG48L3ByZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QXBMaW5rcyBsaW5rcz17bGlua3N9PjwvQXBMaW5rcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2RlbW8uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9BcEJvZHk+XG4gICAgPC9BcEh0bWw+XG4pO1xuIl19