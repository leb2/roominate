import {
  StyleSheet,
} from 'react-native';


export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    flex: 1,
    backgroundColor: '#f0f1f5'
  },
  scrollView: {
    padding: 20,
    paddingTop: 0
  },
  whiteText: {
    color: 'white'
  },
  buttonBar: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    marginTop: 6,
  },
  textInputContainer: {
    marginTop: 30
  }
});
