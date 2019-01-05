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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default class RoomTasksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      'tasks': [{name: 'Task1'}, {name: 'Task2'}],
      'groceries': [{name: 'Groceries1'}, {name: 'Groceries2'}],
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="room tasks" navigation={this.props.navigation}/>
        <ScrollView style={[sharedStyles.container, sharedStyles.scrollView]}>
          <TaskList name={'tasks'} tasks={this.state.tasks}/>
          <TaskList name={'groceries'} tasks={this.state.groceries}/>
        </ScrollView>
      </View>
    );
  }
}
