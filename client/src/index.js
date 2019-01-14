import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './app/layout/App';
import { configureStore } from './app/store/configureStore'
import ScrollToTop from './app/common/util/ScrollToTop'
import { loadActivities } from './features/activity/activityActions'

const store = configureStore()
store.dispatch(loadActivities())

// Code for hot module Replacement.
const rootEl = document.getElementById('root')

// Only one root element in BrowserRouter
let render = () => {
  ReactDOM.render(
    // store id added as a property to the Provider
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
    , rootEl);
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}
render()
