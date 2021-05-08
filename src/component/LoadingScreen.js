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
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const { width: WIDTH, height: height } = Dimensions.get('window');

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={{}}>
          <View style={{ marginTop: '8%', marginLeft: '8%' }}>
              <LinearGradient
                  colors={['#02a2fa', '#98d4f5']}
                  style={{
                      width: WIDTH / 2.2,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      alignItems:'center',
                      justifyContent: 'center',
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
                          allowFontScaling={false}
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
          <View style={{ width: WIDTH / 1.4, marginLeft: '8%' }}>
            <Text
              style={{
                color: '#135275',
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: '2%',
              }}
            >
              Find A Worker is the easiest and best way for employers to post
              job vacancies and hire fast.
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}
          >
            <Image
              style={{ height: height / 1.8, width: WIDTH / 1.1 }}
              source={require('../assets/img/login.gif')}
            />
          </View>

          <View
            style={{
              marginTop: '5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#24b2ff',
                width: WIDTH / 1.2,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                Actions.loginnew();
              }}
            >
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: WIDTH / 1.2,
              }}
            >
              <View style={{ marginTop: '3%' }}>
                <TouchableOpacity>
                  <Text style={{ color: '#24b2ff', fontSize: 16 }}>
                    Terms of Condition
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: '3%' }}>
                <TouchableOpacity>
                  <Text style={{ color: '#24b2ff', fontSize: 16 }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
