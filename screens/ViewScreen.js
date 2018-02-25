import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class ViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Open Spaces',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
