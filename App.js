import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Container from './components/Container'
import store from './store'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
