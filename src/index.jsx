var React = require('react');
var ReactDOM = require('react-dom');

var AComponent = React.createClass ({
  render: function() {
    return <div>HELLO WORLD!</div>
  }
});

ReactDOM.render(
  <AComponent />,
  document.getElementById('app')
);