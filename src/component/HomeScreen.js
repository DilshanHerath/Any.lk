import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

const { width: WIDTH, height: height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={Styles.container}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: WIDTH,
              height: height / 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#3343D1',
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
            <View>
              <TouchableOpacity>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('../assets/icon/Info.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                placeholder={'Search'}
                placeholderTextColor="#fffff"
                // onChangeText={(value) => this.setState({ username: value })}
                // value={this.state.username}
                style={{
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ebecfa',
                  paddingHorizontal: '4%',
                  borderRadius: 10,
                  width: WIDTH / 1.7,
                  height: 44,
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
            <View>
              <TouchableOpacity>
                <Image
                  style={{ width: 45, height: 45 }}
                  source={require('../assets/img/prof.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '22%',
            }}
          >
            <View style={{ flexDirection: 'column' }}>
              <View style={Styles.boxview}>
                <Image
                  style={Styles.imgview}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
              <View style={Styles.boxview2}>
                <Image
                  style={Styles.imgview2}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
              <View style={Styles.boxview2}>
                <Image
                  style={Styles.imgview2}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={Styles.boxview}>
                <Image
                  style={Styles.imgview2}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
              <View style={Styles.boxview2}>
                <Image
                  style={Styles.imgview2}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
              <View style={Styles.boxview2}>
                <Image
                  style={Styles.imgview}
                  source={require('../assets/img/Imag1.png')}
                />
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={Styles.txtname}>Hasitha Auto service</Text>
                  <Text>Baduraliya</Text>
                  <Text>071-6859147</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFC6FC',
  },
  boxview: {
    marginBottom: '5%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#D1D8FE',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  boxview2: {
    marginBottom: '5%',
    marginTop: '5%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#D1D8FE',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  imgview: {
    width: WIDTH / 2.15,
    height: height / 2.5,
    borderRadius: 10,
  },
  imgview2: {
    width: WIDTH / 2.15,
    height: height / 3.5,
    borderRadius: 10,
  },
  txtname: {
    fontSize: 15,
    color: '#7D3E7D',
    fontWeight: 'bold',
  },
});
