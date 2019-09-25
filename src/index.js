/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import { Network } from "mshrq-core";

import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
Network.initializeNetworkInstance({ timeout: 15000,
  appConfig:{
      base_url:"https://jsonplaceholder.typicode.com",
      basic_authorization: "Basic YnJhbmNocG9ydGFsOmJyYW5jaHBvcnRhbHNlY3JldA"
  },
  error:{
      statusErrorNetwork:-1
  },
  apiHeaderAuthorization: "Authorization",

  localhost:false});
  Network.makeNetworkCall({method:'get',url:"/todos/1"}).then(res=>{
    console.log("response",res);
  });
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
