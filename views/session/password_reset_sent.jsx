var React = require('react');
var Layout = require('../layout');

module.exports = React.createClass({
  render: function() {
    return (
      <Layout>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Password Reset Sent</h3>
            </div>
            <div className="panel-body">
              <p>
                You should receive an email shortly with instructions on how to reset your password
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
});
