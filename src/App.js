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

// Theme
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyle from 'theme/GlobalStyle';
import Template from 'theme/Template';

const App = () => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Template>
          <Switch>
            <Route path="/" component={List} exact />
            <Route path="/pokemon/:id" component={Details} />
            <Route path="*" component={NotFound} />
          </Switch>
          <GlobalStyle />
        </Template>
      </ThemeProvider>
    </Provider>
  </Router>
);

export default App;
