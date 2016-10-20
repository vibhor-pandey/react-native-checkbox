import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 0.055 * Dimensions.get('window').width,
    height: 0.033 * Dimensions.get('window').height,
    borderRadius: 0.008 * Dimensions.get('window').width,
  },

  checkboxLabel: {
    marginLeft: 0.027 * Dimensions.get('window').width,
  },

  image: {
    height: 0.02 * Dimensions.get('window').height,
    width: 0.03 * Dimensions.get('window').width,
  }
});
