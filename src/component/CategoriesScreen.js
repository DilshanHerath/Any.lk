import React, {Component} from 'react';
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
import {Actions} from 'react-native-router-flux';

const {width: WIDTH, height: height} = Dimensions.get('window');

export default class CategoriesScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={Styles.mainview}>
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
                                <Text
                                    allowFontScaling={false}
                                    style={Styles.txttittle}>Category</Text>
                            </View>
                            <View style={{width: 30}}></View>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom:'5%'}}>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/mobile.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Mobile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/electrician.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Electrician</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/supermarket.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Super Market</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom:'5%'}}>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/mechanic1.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text style={Styles.txt}>Mechanic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/technician.png')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Technician</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/academic.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Academic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom:'5%'}}>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/mobile.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Mobile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/electrician.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Electrician</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/supermarket.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Super Market</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom:'5%'}}>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/mechanic1.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Mechanic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/technician.png')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Technician</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/academic.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Academic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom:'5%'}}>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/mobile.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Mobile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/electrician.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Electrician</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.viewstyle}>
                                <Image
                                    style={Styles.imgstyle}
                                    source={require('../assets/img/supermarket.jpg')}
                                />
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text
                                        allowFontScaling={false}
                                        style={Styles.txt}>Super Market</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

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
        fontSize: 25,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
    },
    txt: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        marginTop:'5%',
        marginBottom:'5%',
    },
    imgstyle:{
        width: 110,
        height: 110,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    viewstyle:{
      marginBottom:'5%',
    },
});
