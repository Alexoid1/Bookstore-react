import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import store from './reducers/index';
import Header from './components/Header';
import Library from './containers/Library';
import './components/App.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
