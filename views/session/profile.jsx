var React = require('react');
var Layout = require('../layout');

var Profile = React.createClass({
  render: function() {
    return (
      <Layout>
      <header>
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-circle" src={this.props.imageUrl} width="250" height="250"></img>
                    <div>
                        <span className="name">Hello {this.props.firstName} {this.props.lastName}</span>

                        <p>
                        <span className="skills">Welcome to Friender</span>
                        </p>
                        <br />
                        <a href="/log_out">Logout</a>
                    </div>
                </div>
            </div>
        </div>
       </header>
        
      </Layout>
    );
  }
})



module.exports = Profile;
