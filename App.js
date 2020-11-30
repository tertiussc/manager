import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers';
// Custom imports
import LoginForm from './src/screens/LoginForm'
import Router from './src/router/Router'

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBqUYvBOTC-06PJMh7KpwzjgYMQzHzsOIk',
      authDomain: 'manager-4b38c.firebaseapp.com',
      databaseURL: 'https://manager-4b38c.firebaseio.com',
      projectId: 'manager-4b38c',
      storageBucket: 'manager-4b38c.appspot.com',
      messagingSenderId: '285761323821',
      appId: '1:285761323821:web:8c4d6f19383ef9129749a4',
      measurementId: 'G-EJ9BJS2MM4'
    };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;