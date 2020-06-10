import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Store
import store from 'store';

// Containers
import List from 'containers/List';
import Details from 'containers/Details';
import NotFound from 'containers/NotFound';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/pokemon/:id" component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
