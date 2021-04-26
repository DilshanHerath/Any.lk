import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { addUser } from '../action/LoginAction';
import { Actions } from 'react-native-router-flux';
import Service from '../services/auth';

const { width: WIDTH, height: height } = Dimensions.get('window');

class SignUp extends Component {
  state = {
    id: '',
    fname: '',
    lname: '',
    age: 22,
    email: '',
  };

  callServiceFunc = async () => {
    console.log('1');
    const { id, fname, lname, age, email } = this.state;
    const data = {
      // id: id,
      age: age,
      email: email,
      fname: fname,
      lname: lname,
    };
    await Service.signin(data).then(async (response) => {
      console.log('2');
      console.log(response);
      if (response) {
        console.log('3');
      } else {
      }
    });
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: '#CFC6FC',
            height: height + 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: WIDTH,
              borderRadius: 20,
              backgroundColor: '#6E78F7',
              height: height / 2.5,
              marginTop: '-15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                marginTop: '-15%',
                color: 'white',
                fontSize: 30,
                marginBottom: '5%',
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </Text>
          </View>
          <View
            style={{
              marginTop: '-25%',
              backgroundColor: '#dbd4fc',
              width: WIDTH - 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              // marginBottom: '10',
              borderColor: '#afa2f5',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,
              elevation: 17,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: '#6E78F7',
                }}
                source={require('../assets/img/prof.png')}
              />
            </View>

            <View style={{ marginTop: '10%' }}>
              <TextInput
                placeholder={'ID'}
                placeholderTextColor="#fffff"
                onChangeText={(value) => this.setState({ id: value })}
                value={this.state.id}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: '4%',
                  borderRadius: 9,
                  width: WIDTH - 85,
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
                placeholder={'FIRST NAME'}
                placeholderTextColor="#fffff"
                onChangeText={(value) => this.setState({ fname: value })}
                value={this.state.fname}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: '4%',
                  borderRadius: 9,
                  width: WIDTH - 85,
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
                placeholder={'LAST NAME'}
                placeholderTextColor="#fffff"
                onChangeText={(value) => this.setState({ lname: value })}
                value={this.state.lname}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: '4%',
                  borderRadius: 9,
                  width: WIDTH - 85,
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
                placeholder={'AGE'}
                placeholderTextColor="#fffff"
                // onChangeText={(value) => this.setState({ age: value })}
                // value={this.state.age}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: '4%',
                  borderRadius: 9,
                  width: WIDTH - 85,
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
                placeholder={'EMAIL'}
                placeholderTextColor="#fffff"
                onChangeText={(value) => this.setState({ email: value })}
                value={this.state.email}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffffff',
                  paddingHorizontal: '4%',
                  borderRadius: 9,
                  width: WIDTH - 85,
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
            <View
              style={{
                marginTop: '10%',
                marginBottom: '20%',
              }}
            >
              <TouchableOpacity
                onPress={this.callServiceFunc}
                // onPress={() => {
                //   this.props.addUser(this.state.userCredential);
                //   Actions.login();
                //   if (this.props.success) {
                //     alert('LOginSuccess');
                //   } else {
                //     // alert(this.props.success);
                //   }
                // }}
                style={Styles.btn}
              >
                <Text style={Styles.updatetxt}>Sign In </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // username: state.login.username,
    // password: state.login.password,
    userCredential: state.login.userCredential,
    success: state.login.success,
  };
};

export default connect(mapStateToProps, {
  addUser,
})(SignUp);

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#6E78F7',
    borderColor: '#05C352',
    // marginBottom:'10%',
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
});
