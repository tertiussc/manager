import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers';
// Custom imports
import LoginForm from './src/screens/LoginForm'

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
    if (!firebase.apps) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;