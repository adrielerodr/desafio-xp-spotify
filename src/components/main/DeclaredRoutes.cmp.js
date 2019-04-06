import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { Index } from '@/features/index';
import { Search } from '@/features/search';
import Error404Handler from '@/components/404/Error404.cmp';

const DeclaredRoutes = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route component={Error404Handler} />
  </Switch>
);

export default DeclaredRoutes;
