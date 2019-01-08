import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import TaskListItem from "./TaskListItem";

export default class TaskList extends React.Component {

  constructor(props) {
    super();
    this.props = props;
  }

  gotoTaskScreen(task) {
    this.props.navigation.navigate('Task')
  }

  render() {
    let tasks = this.props.tasks;
    let name = this.props.name;

    return (
      <View>
        <Text style={styles.sectionHeader}>{name.toUpperCase()}</Text>
        <FlatList data={tasks}
                  renderItem={(item) => <TaskListItem task={item.item} clicked={(task) => this.gotoTaskScreen(task)}/>}
                  keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 12,
    padding: 10,
    fontSize: 14,
    fontWeight: '800',
    color: '#666',
    fontFamily: 'montserrat'
  },
});
