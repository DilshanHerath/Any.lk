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
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
const { width: WIDTH, height: height } = Dimensions.get('window');
import { changeComponent, changeIconComponent } from '../action/FooterAction';
class LocationScreen extends Component {
  render() {
    return (
     <ScrollView>
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
                <TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
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

<View style={{width:WIDTH,height:40,justifyContent:'center',backgroundColor:'white',alignItems:'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
}}>
<Text style={Styles.txt1}>All of SriLanka</Text>
</View>
<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%',marginTop:'5%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Kaluthara</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Colombo</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Gampaha</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Galle</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Matara</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Hambantota</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Kandy</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Matale</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Nuwara Eliya</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Kegalla</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Ratnapura</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Badulla</Text>
</View>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity
                 onPress={() => {
                  Actions.location2();
                }}
                >
<View style={{alignItems:'center',marginBottom:'4%'}}>
<View style={{width:WIDTH-30,height:45,backgroundColor:'white',flexDirection:'row',alignItems:'center',borderRadius:6,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}}>

<View style={{marginLeft:'5%'}}>
<Image style={{ width: 25, height: 25 }}source={require('../assets/icon/loc.png')}/>
</View>

<View style={{marginLeft:'5%'}}>
<Text style={Styles.txt3}>Monaragala</Text>
</View>
</View>
</View>
</TouchableOpacity>

        </View>
     </ScrollView>
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
})(LocationScreen);

const Styles = StyleSheet.create({
  txt1: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#0963ed',
    marginLeft:'5%',
  },
  txt2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  txt3: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#24b2ff',
    marginLeft:'5%',
  },
});
