import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './components/NotFound';
import Login from './containers/Login';
import Register from './containers/Register';
import RouteWithProps from './components/RouteWithProps';
import NewTrip from './containers/Trips/NewTrip';
import TripsList from './containers/Trips/TripsList';
import TripDetail from './containers/Trips/TripDetail';

export default ({ childProps }) => {
  return (
    <Switch>
      <RouteWithProps path="/" exact component={Home} props={childProps} />
      <RouteWithProps path="/login" exact component={Login} props={childProps} />
      <RouteWithProps path="/register" exact component={Register} props={childProps} />
      <RouteWithProps path="/trips" exact component={TripsList} props={childProps} />
      <RouteWithProps path="/trips/new" exact component={NewTrip} props={childProps} />
      <RouteWithProps path="/trips/:id" exact component={TripDetail} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  );
};
