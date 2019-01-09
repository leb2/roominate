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
    super(props);
  }

  render() {
    return (
      <ElevatedView elevation={1} style={styles.outerContainer}>
        {Header.renderIcon(this.props.leftIconName, this.props.leftHandler, styles.left)}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {this.props.name.toUpperCase()}
          </Text>
        </View>
        {Header.renderIcon(this.props.rightIconName, this.props.rightHandler, styles.right)}

      </ElevatedView>
    );
  }

  static renderIcon(iconName, handler, sideStyle) {
    if (iconName !== undefined) {
      return (
        <TouchableNativeFeedback onPress={handler}>
          <View style={[styles.iconContainer, sideStyle]}>
            <Icon.Ionicons
              name={iconName}
              style={styles.icon}
            />
          </View>
        </TouchableNativeFeedback>
      )
    }
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
  iconContainer: {
    // flex: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
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
