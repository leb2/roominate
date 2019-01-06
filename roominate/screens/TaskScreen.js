import React from 'react';
import {
  Image,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { sharedStyles } from '../constants/SharedStyles';
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default class TaskScreen extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="Task 1" navigation={this.props.navigation} isStack={true}/>
      </View>
    );
  }
}
