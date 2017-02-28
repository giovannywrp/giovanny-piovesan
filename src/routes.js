import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Home from './views/pages/home';
import About from './views/pages/about';
import Work from './views/pages/work';
import Contact from './views/pages/contact';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/contact" component={Contact}/>
  </Route>
);

export default routes;