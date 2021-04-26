import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width: WIDTH, height: height } = Dimensions.get('window');

export default class LoginNew extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={{ height: height }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: height / 2.8,
            }}
          >
            <LinearGradient
              colors={['#02a2fa', '#98d4f5']}
              style={{
                width: WIDTH / 2.2,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
              }}
            >
              <View
                style={{
                  // backgroundColor: '#24b2ff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 40,
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}
                >
                  aNy.lk
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <View>
                <Text
                  style={{ color: '#135275', fontWeight: 'bold', fontSize: 38 }}
                >
                  Welcome Back
                </Text>
              </View>
              <View>
                <Text style={{ color: '#135275', fontSize: 20 }}>
                  Login to your account
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ marginTop: '8%' }}>
                <TextInput
                  placeholder={'Username'}
                  placeholderTextColor="#fffff"
                  // onChangeText={(value) => this.setState({ username: value })}
                  // value={this.state.username}
                  style={{
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    backgroundColor: '#e6e7e8',
                    paddingHorizontal: '4%',
                    borderRadius: 25,
                    width: WIDTH / 1.2,
                    height: 50,
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 0,
                          height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                  }}
                />
              </View>
              <View style={{ marginTop: '3%' }}>
                <TextInput
                  placeholder={'Password'}
                  placeholderTextColor="#fffff"
                  // onChangeText={(value) => this.setState({ username: value })}
                  // value={this.state.username}
                  style={{
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    backgroundColor: '#e6e7e8',
                    paddingHorizontal: '4%',
                    borderRadius: 25,
                    width: WIDTH / 1.2,
                    height: 50,
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 0,
                          height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                  }}
                />
              </View>
              <View style={{ marginTop: '9%' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#24b2ff',
                    width: WIDTH / 1.2,
                    height: 50,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}
                  >
                    Enter
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            <View style={{ marginTop: '6%' }}>
                <TouchableOpacity>
                    <Text style={{ color: '#24b2ff', fontSize: 16,marginLeft:'10%' }}>
                        Forgot Your Password
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
