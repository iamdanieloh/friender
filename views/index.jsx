var React = require('react');
var Layout = require('./layout');



var Homepage = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1>Welcome to Friender</h1>
        <p><a href="/log_in">Log In</a></p>
        <p>or</p>
        <p><a href="/sign_up">Sign Up</a></p>
      </Layout>
    );
  }
})



module.exports = Homepage;
