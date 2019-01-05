import React from 'react';
import { Icon } from 'expo';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Colors from '../constants/Colors';

export default class TaskListItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <TouchableNativeFeedback styles={styles.container} onPress={() => this.props.clicked(this.props.task)}>
        <ElevatedView elevation={1} style={styles.elevatedView}>
          <View>
            <Text style={styles.name}>
              { this.props.task.name }
            </Text>
          </View>
          <View>
            <Text style={styles.description}>
              Jan 16 - No assignment
            </Text>
          </View>
        </ElevatedView>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    overflow: 'visible',
  },
  elevatedView: {
    overflow: 'visible',
    margin: 2,
    marginBottom: 0,
    marginTop: 0,
    padding: 18,
    fontSize: 14,
    borderLeftWidth: 3,
    borderLeftColor: '#666bc4',
    // borderLeftColor: '#c0bcc4',
    borderRadius: 2
  },
  name: {
    color: '#555',
    fontSize: 18,
    marginBottom: 4
  },
  description: {
    color: '#777',
    fontSize: 11
  }
});
