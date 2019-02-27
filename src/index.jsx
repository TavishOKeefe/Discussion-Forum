import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import postListReducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(postListReducer);

const render = (Component) => {
  ReactDOM.render (
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable*/
if (module.hot){
  module.hot.accept('./components/App', ()=> {
    render(App);
  });
}
/*eslint-enable*/
