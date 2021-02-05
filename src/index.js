import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/index';
import Header from './components/Header'
import './components/App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <div className="App">
      <Header/>
        <Switch>
          <Route exact path ="/" component={App}/>
          {/* <Route exact path ="/searchBook" component={Movie}/> */}
        </Switch> 
     </div>   
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root'),
);
