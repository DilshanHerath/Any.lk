import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../action/LoginAction';
import { Actions } from 'react-native-router-flux';
import Service from '../services/auth';

const { width: WIDTH, height: height } = Dimensions.get('window');

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
  };

  callServiceFunc = async () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    await Service.signin(data).then(async (response) => {
      if (response) {
      } else {
      }
    });
  };

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Image
              style={{ marginTop: '-15%', marginLeft: '-8%', zIndex: 5 }}
              source={require('../assets/icon/Polygon.png')}
            />
          </View>
          <View>
            <Image
              style={{ marginTop: '15%', marginLeft: '-15%', zIndex: 5 }}
              source={require('../assets/icon/Polygon.png')}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: height,
            marginTop: '-10%',
            // justifyContent:'center'
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 50,
                color: 'black',
                fontWeight: 'bold',
                marginTop: '5%',
                marginBottom: '5%',
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                // fontFamily: 'Montserrat-Bold',
              }}
            >
              aNy.lk
            </Text>
          </View>
          <View style={{ marginBottom: '10%', alignItems: 'center' }}>
            <Text style={{ color: '#1745FE', fontSize: 20, marginTop: '-5%' }}>
              For your beinness...
            </Text>
          </View>
          {/*<View style={{ marginLeft: '7%' }}>*/}
          {/*    <View>*/}
          {/*        <Text*/}
          {/*            style={{ color: '#7B046B', fontSize: 22, fontWeight: 'bold' }}*/}
          {/*        >*/}
          {/*            Welcome to aNy.lk*/}
          {/*        </Text>*/}
          {/*    </View>*/}
          {/*    <View style={{marginBottom:'7%'}}>*/}
          {/*        <Text style={{ color: 'black', fontSize: 15, marginLeft: '2%' }}>*/}
          {/*            Please login to continue*/}
          {/*        </Text>*/}
          {/*    </View>*/}
          {/*</View>*/}
          <View style={{ alignItems: 'center', marginTop: '10%' }}>
            <View style={{ flexDirection: 'row', marginBottom: '5%' }}>
              <View>
                <View>
                  <TextInput
                    placeholder={'Username'}
                    placeholderTextColor="#fffff"
                    onChangeText={(value) => this.setState({ username: value })}
                    value={this.state.username}
                    style={{
                      borderColor: '#C6C6C6',
                      borderWidth: 1,
                      backgroundColor: '#ffffff',
                      paddingHorizontal: '4%',
                      borderRadius: 25,
                      width: WIDTH / 1.4,
                      height: 48,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 8,
                      },
                      shadowOpacity: 0.46,
                      shadowRadius: 11.14,
                      elevation: 17,
                    }}
                  />
                </View>
                <View style={{ marginTop: '10%' }}>
                  <TextInput
                    placeholder={'Password'}
                    placeholderTextColor="#fffff"
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                    style={{
                      borderColor: '#C6C6C6',
                      borderWidth: 1,
                      backgroundColor: '#ffffff',
                      paddingHorizontal: '4%',
                      borderRadius: 25,
                      width: WIDTH / 1.4,
                      height: 48,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 8,
                      },
                      shadowOpacity: 0.46,
                      shadowRadius: 11.14,
                      elevation: 17,
                    }}
                  />
                </View>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.addUser(this.state.userCredential);
                    Actions.home();
                    if (this.props.success) {
                      alert('LOginSuccess');
                    } else {
                      // alert(this.props.success);
                    }
                  }}
                >
                  <Image source={require('../assets/icon/next.png')} />
                </TouchableOpacity>
              </View>
            </View>
            {/*<View>*/}
            {/*  <TouchableOpacity*/}
            {/*    onPress={() => {*/}
            {/*      this.props.addUser(this.state.userCredential);*/}
            {/*      Actions.home();*/}
            {/*      if (this.props.success) {*/}
            {/*        alert('LOginSuccess');*/}
            {/*      } else {*/}
            {/*        // alert(this.props.success);*/}
            {/*      }*/}
            {/*    }}*/}
            {/*    style={Styles.btn}*/}
            {/*  >*/}
            {/*    <Text style={Styles.updatetxt}>Sign in </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                width: WIDTH,
                marginTop: '15%',
              }}
            >
              <View>
                <TouchableOpacity
                  style={Styles.btnsign}
                  onPress={() => {
                    Actions.signup();
                  }}
                >
                  <Text
                    style={{
                      color: '#128596',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.btnforgot}
                  onPress={() => {
                    Actions.signup();
                  }}
                >
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Image
              style={{ marginTop: '-15%', marginLeft: '-8%' }}
              source={require('../assets/icon/Polygon.png')}
            />
          </View>
          <View>
            <Image
              style={{ marginTop: '5%', marginLeft: '65%', zIndex: 5 }}
              source={require('../assets/icon/Polygon.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userCredential: state.login.userCredential,
    success: state.login.success,
  };
};

export default connect(mapStateToProps, {
  addUser,
})(LoginScreen);

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#6E78F7',
    borderColor: '#05C352',
    width: WIDTH - 150,
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  updatetxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  btnsign: {
    width: WIDTH / 2.4,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    backgroundColor: 'transparent',
    zIndex: 6,
    borderColor: '#8c8e8f',
  },
  btnforgot: {
    width: WIDTH / 2.4,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#8c8e8f',
  },
});
