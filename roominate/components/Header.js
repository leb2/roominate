import React from 'react';
import { Icon } from 'expo';
import {
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Colors from '../constants/Colors';
import DrawerIcon from "./DrawerIcon";

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <ElevatedView elevation={1} style={styles.outerContainer}>
        <TouchableNativeFeedback onPress={() => this.props.navigation.openDrawer()}>
          <View style={styles.drawerIconContainer}>
            <Icon.Ionicons
              name={'md-list'}
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
