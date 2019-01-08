import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default class ThemedTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>
            {this.props.text.toUpperCase()}
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            {...this.props}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  textInput: {
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
    color: '#343443',
    fontSize: 18,
  },
  textInputContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontFamily: 'montserrat',
    fontWeight: '800',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    marginLeft: 4,
  }
});
