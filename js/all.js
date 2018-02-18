

class App extends Component {
	render() {
		return React.createElement(
			"div",
			{ className: "App" },
			React.createElement(
				"header",
				{ className: "App-header" },
				React.createElement(
					"h1",
					{ className: "App-title" },
					"THIS IS THE APP"
				)
			)
		);
	}
}
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=all.js.map
