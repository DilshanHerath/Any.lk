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
class Category extends Component {
  render() {
    return (
        <View
        style={{
            flex:1,
            backgroundColor: '#e5e1eb',
      }}
        >
          <View
            style={{
              backgroundColor: '#1986fa',
              width: WIDTH,
              height: height /9,
              marginBottom: '3%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: '3%',
                marginBottom:'5%',
                alignItems: 'center',
                width: WIDTH - 50,
              }}
            >
              <View>
                <TouchableOpacity>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require('../assets/icon/iconback.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Text style={Styles.txt2}>Location</Text>
              </View>
              <View style={{width:30}}></View>
            </View>
            
          </View>
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
})(FavouritScreen);

