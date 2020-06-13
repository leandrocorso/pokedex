import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Store
import { store, persistor } from 'store';

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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:name" component={Details} />
            <Route path="*" component={NotFound} />
          </Switch>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
