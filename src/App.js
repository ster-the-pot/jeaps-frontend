import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import * as Routes from './routes/Routes';
import Login from "./routes/Login/Login";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link as Link } from 'react-router-dom';
import FoodTruckNavigation from './nav/FoodTruckNavigation';
import { List, ListItem } from '@material-ui/core';
import store from "./redux/store/store";
import CreateAccount  from './routes/Login/CreateAccount';

function App() {
  return (
    <div className="app-root">
    <Provider store={store}>
      {/* Baseline stylization fixes from Materials UI*/}
      <CssBaseline />
      <FoodTruckNavigation currentPage="Home" />
      <Router>
        <List>
        <ListItem><Link to="/account/login">Login</Link></ListItem>
        <ListItem><Link to="/account/create">Create Account</Link></ListItem>
        <ListItem><Link to="/test">TestEndpoint</Link></ListItem>
        <ListItem><Link to="/search">TruckSearch</Link></ListItem>
        </List>
        <Switch>
          {/*place all base routes here (ex: login, trucks, etc) */}
          <Route path="/test" component={Routes.TestEndpoint}></Route>
          <Route path="/account/login" component={Login}></Route>
          <Route path="/account/create" component={CreateAccount}></Route>
          <Route path="/search" component={Routes.TruckSearch}></Route>
          <Route path="/" component={Routes.Home}></Route>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}
export default App;

