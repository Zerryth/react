var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World! This is made from React training!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);