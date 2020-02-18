import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, TextField, Card, CardHeader, CardContent, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handlePassword = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  handleUsername = e => {
    this.setState({ ...this.state, username: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
    };
    
    this.props.loginUser(user);
  };

  render() {
    //NOTE: conditional rendering of login page or already logged in msg
    // const loginButton = (
    //   <React.Fragment>
    //     <TextField required label="Username"></TextField> <br />
    //     <TextField required label="Password" type="password"></TextField>
    //   </React.Fragment>
    // );
    let login;
    if (this.props.loggedIn == false) {
      login = (
        <React.Fragment>
          <CardHeader title="Login"></CardHeader>
          <CardContent>
            <TextField onChange={e => this.handleUsername(e)} required label="Username"></TextField>{' '}
            <br />
            <TextField
              onChange={e => this.handlePassword(e)}
              required
              label="Password"
              type="password"
            ></TextField>
            <br />
            <Button onClick={this.handleSubmit.bind()}>Login</Button>
          </CardContent>
        </React.Fragment>
      );
    } else {
      login = (
        <React.Fragment>
          <CardHeader title="Login"></CardHeader>
          <CardContent>You are Currently Logged In</CardContent>
        </React.Fragment>
      );
    }
    return (
      <Container>
        <Card>{login}</Card>
      </Container>
    );
  }
}

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  
  return { loggedIn: state.auth.user == null ? false : true };
};

export default connect(mapStateToProps, { loginUser })(Login);
