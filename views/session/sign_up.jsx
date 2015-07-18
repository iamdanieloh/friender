var React = require('react');
var Layout = require('../layout');

var ErrorMessage = React.createClass({
  render: function() {
    return <div className="alert alert-danger" role="alert">{this.props.message}</div>;
  }
});

var SignUp = React.createClass({
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
              <h3 className="panel-title">Sign Up</h3>
            </div>
            <div className="panel-body">
              <form method="post" action="/sign_up">
                {errorMessage}
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" name="emailAddress" defaultValue={this.props.emailAddress} />
                </div>
                <div className="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstName" />
                </div>
                <div className="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="lastName" />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
                </div>
                <br />
                <br />
                <div className="form-group">
                  <label for="profileUrl">Profile Picture</label>
                  <input type="text" className="form-control" id="profileUrl" placeholder="Upload A Profile Picture" name="profileUrl" />
                </div>
                <div className="form-group">
                  <label for="age">Age</label>
                  <input type="number" className="form-control" id="age" placeholder="Age" name="age" />
                </div>
                <div className="form-group">
                  <label for="gender">Gender</label>
                  <br />
                  <select id="gender" name="gender"><option value="male">Male</option><option value="female">Female</option></select>
                </div>
                <div className="form-group">
                  <label for="location">Location</label>
                  <input type="text" className="form-control" id="location" placeholder="Location" name="location" />
                </div>
                <div className="form-group">
                  <label for="seeMen">Match with Men?</label>
                  <br />
                  <input type="radio" id="seeMen" name="seeMen" value="true" />Yes
                  <br />
                  <input type="radio" id="seeMen" name="seeMen" value="false" />No
                </div>
                <div className="form-group">
                  <label for="seeWomen">Match with Women?</label>
                  <br />
                  <input type="radio" id="seeWomen" name="seeWomen" value="true" />Yes
                  <br />
                  <input type="radio" id="seeWomen" name="seeWomen" value="false" />No
                </div>
                <button type="submit" className="btn btn-success">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
});

module.exports = SignUp;
