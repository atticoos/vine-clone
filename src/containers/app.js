'use strict';

import React from 'react';
import {
  View
} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store';
import Feed from './feed';

class App extends React.Component {
  componentWillMount() {
    store.dispatch({type: 'meh'});
  }
  render () {
    return (
      <Provider store={store}>
        <Feed />
      </Provider>
    );
  }
}

export default App;
