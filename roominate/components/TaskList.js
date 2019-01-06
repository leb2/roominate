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
  },
  sectionHeader: {
    marginTop: 12,
    padding: 10,
    fontSize: 14,
    fontWeight: '800',
    color: '#666',
    fontFamily: 'montserrat'
  },
});
