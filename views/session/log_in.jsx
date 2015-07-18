var React = require('react');
var Layout = require('../layout');

var ErrorMessage = React.createClass({
  render: function() {
    return <div className="alert alert-danger" role="alert">{this.props.message}</div>;
  }
});

var LogIn = React.createClass({
  render: function() {
    var errorMessage;

    if(this.props.error) {
      errorMessage = <ErrorMessage message={this.props.error} />;
    }

    return (
      <Layout>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Log In</h3>
            </div>
            <div className="panel-body">
              <form method="post" action="/log_in">
                {errorMessage}
                <div className="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" name="emailAddress" defaultValue={this.props.emailAddress} />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-success">Log In</button>
                <div className="form-group">
                  <br />
                  <a href="/forgot_password">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
});

module.exports = LogIn;
