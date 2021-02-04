import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/index';

// const intialState = [
//   {
//     bookID: Math.floor(Math.random() * 1000),
//     title: 'Siddartha',
//     category: 'Biography',
//     author: 'Alexoid1',
//     percentage: 0,
//   },
//   {
//     bookID: Math.floor(Math.random() * 1000),
//     title: 'Doors of perception',
//     category: 'Learning',
//     author: 'Alexoid1',
//     percentage: 0,
//   },
//   {
//     bookID: Math.floor(Math.random() * 1000),
//     title: 'Divine Comedy',
//     category: 'Learning',
//     author: 'Alexoid1',
//     percentage: 0,
//   },
// ];

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
