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
import Home from 'containers/Home';
import Details from 'containers/Details';
import NotFound from 'containers/NotFound';

// Theme
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyle from 'theme/GlobalStyle';

const App = () => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:name" component={Details} />
          <Route path="*" component={NotFound} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </Router>
);

export default App;
