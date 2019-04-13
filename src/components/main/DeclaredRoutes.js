import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { Index } from '@/features/index';
import { Search } from '@/features/search';
import { Album } from '@/features/album';
import Error404Handler from '@/components/404/Error404';

const DeclaredRoutes = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/album/:id" component={Album} />
    <Route component={Error404Handler} />
  </Switch>
);

export default DeclaredRoutes;
