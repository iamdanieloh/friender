var React = require('react');

var Error = React.createClass({
  render: function() {
    return (<html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>{this.props.message}</h1>
        <pre>{this.props.error}</pre>
      </body>
    </html>);
  }
});

module.exports = Error;
