import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Smart Parking',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button style={styles.button} onPress={() =>
          navigate("ViewScreen", {screen: "ViewScreen"
        })}
        title="View Open Spaces Near Me"/>
        <Button style={styles.button} onPress={() =>
          navigate("ReportScreen", {screen: "ReportScreen"
        })}
        title="Report Open Spaces"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
  },
})
