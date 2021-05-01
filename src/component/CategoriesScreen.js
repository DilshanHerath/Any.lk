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
    TextInput, ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const { width: WIDTH, height: height } = Dimensions.get('window');

export default class CategoriesScreen extends Component {
    render() {
        return (
         <ScrollView>
             <View  style={Styles.mainview}>
                 <View
                     style={{
                         backgroundColor: '#1986fa',
                         width: WIDTH,
                         height: height / 9,
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
                             marginBottom: '5%',
                             alignItems: 'center',
                             width: WIDTH - 50,
                         }}
                     >
                         <View>
                             <TouchableOpacity>
                                 <Image
                                     style={{width: 40, height: 40}}
                                     source={require('../assets/icon/iconback.png')}
                                 />
                             </TouchableOpacity>
                         </View>
                         <View style={{}}>
                             <Text style={Styles.txttittle}>Category</Text>
                         </View>
                         <View style={{width: 30}}></View>
                     </View>

                 </View>
             </View>
         </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: '#e5e1eb',
    },
    txttittle: {
        fontSize: 28,
        fontWeight: 'bold',
        // marginLeft: '5%',
        color: 'white',
    },
});
