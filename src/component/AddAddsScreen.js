import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { changeComponent, changeIconComponent } from '../action/FooterAction';
class AddAddsScreen extends Component {
  render() {
    return (
      <View>
        <Text>AddAddsScreen..!</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentScreen: state.footer.currentScreen,
    changeIcon: state.footer.changeIcon,
  };
};

export default connect(mapStateToProps, {
  changeComponent,
  changeIconComponent,
})(AddAddsScreen);
