import React from 'react';
import { Icon } from 'expo';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.isStack = props.isStack === undefined ? false : props.isStack;
    this.iconName = props.isStack ? 'md-arrow-back' : 'md-list' ;
  }

  handleNavigationPress() {
    if (this.isStack) {
      this.props.navigation.goBack()
    } else {
      this.props.navigation.openDrawer();
    }
  }

  render() {
    return (
      <ElevatedView elevation={1} style={styles.outerContainer}>
        <TouchableNativeFeedback onPress={() => this.handleNavigationPress()}>
          <View style={styles.drawerIconContainer}>
            <Icon.Ionicons
              name={this.iconName}
              style={styles.icon}
            />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {this.props.name.toUpperCase()}
          </Text>
        </View>
      </ElevatedView>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    height: 110,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  icon: {
    fontSize: 32,
  },
  drawerIconContainer: {
    // flex: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '800',
    color: '#333',
    fontFamily: 'montserrat',
    fontSize: 16,
    position: 'relative',
    top: 16,
    left: -6
  },
  touchable: {
    backgroundColor: 'green',
    display: 'none'
  }
});
