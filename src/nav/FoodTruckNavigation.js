import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Grid, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/actions/authActions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class FoodTruckNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: this.props.currentPage };
  }

  render() {
    let loggedIn;
    if (this.props.user != null) {
      loggedIn = (
        <React.Fragment>
          <AccountCircleIcon/>
          {this.props.user}
          <Button onClick={this.props.logoutUser} color="inherit">Logout</Button>
        </React.Fragment>
      );
    }
    return (
      <AppBar position="static">
        <Grid container>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ flex: 1 }} xs={3} variant="h4">
              {this.state.currentPage}
            </Typography>
            {loggedIn}
          </Toolbar>
        </Grid>
      </AppBar>
    );
  }
}
FoodTruckNavigation.propTypes = {
  currentPage: PropTypes.string,
  user: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { user: state.auth.user == null ? null : state.auth.user };
};

export default connect(mapStateToProps, { logoutUser })(FoodTruckNavigation);
