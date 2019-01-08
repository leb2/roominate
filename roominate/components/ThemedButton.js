import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

export default class ThemedButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>
            {this.props.text.toUpperCase()}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderColor: '#535b99',
    paddingRight: 20,
    paddingLeft: 20
  },
  text: {
    color: '#6173de',
    fontSize: 14,
    fontFamily: 'roboto',
    fontWeight: '500',
    // letterSpacing: 1
  }
});

