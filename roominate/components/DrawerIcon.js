import React from 'react';
import { Icon } from 'expo';
import {
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import Colors from '../constants/Colors';

export default class DrawerIcon extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <TouchableNativeFeedback style={styles.container} onPress={() => this.props.clicked(this.props.task)}>
      <Icon.Ionicons
        name={'md-list'}
        size={32}
        style={{ position: 'absolute', top: 25, left: 25, zIndex: 2 }}
        color={this.props.focused ? '#333' : '#444'}
      />
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

