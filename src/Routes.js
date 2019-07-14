import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './components/NotFound';
import Login from './containers/Login';
import Register from './containers/Register';
import RouteWithProps from './components/RouteWithProps';

export default ({ childProps }) => {
  return (
    <Switch>
      <RouteWithProps path="/" exact component={Home} props={childProps} />
      <RouteWithProps path="/login" exact component={Login} props={childProps} />
      <RouteWithProps path="/register" exact component={Register} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  );
};
