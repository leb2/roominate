import React from 'react';
import {
  View,
} from 'react-native';
import { sharedStyles } from '../constants/SharedStyles';
import Header from "../components/Header";

export default class TaskScreen extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.task = this.props.navigation.getParam('task');
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name={this.task.name} leftIconName={'md-arrow-back'}
                leftHandler={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}
