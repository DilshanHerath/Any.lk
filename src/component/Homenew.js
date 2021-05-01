import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {changeComponent, changeIconComponent} from '../action/FooterAction';
import {connect} from 'react-redux';
import {Actions} from "react-native-router-flux";

const {width: WIDTH, height: height} = Dimensions.get('window');
const civilengineer = require('../assets/img/civilengineering.jpg');
const carpenter = require('../assets/img/carpenter.jpeg');
const mechanic = require('../assets/img/mechanic.jpg');
const electricion = require('../assets/img/electricion.jpg');
const painter = require('../assets/img/painter.jpg');
const ratingstar = require('../assets/icon/rating.png');

const man1 = require('../assets/img/man2.jpg');

class Homenew extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView>
                <View style={Styles.mainview}>
                    <View
                        style={{
                            backgroundColor: '#1986fa',
                            width: WIDTH,
                            // height: height / 4.8,
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
                                marginTop: '3%',
                                marginBottom: '5%',
                                alignItems: 'center',
                                width: WIDTH - 50,
                            }}
                        >
                            <View>
                                <TouchableOpacity>
                                    <Image
                                        style={{width: 40, height: 40}}
                                        source={require('../assets/icon/Info.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={Styles.txt2}>aNy.lk</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={()=>{Actions.profile()}}>
                                    <Image
                                        style={{width: 45, height: 45, borderRadius: 100}}
                                        source={require('../assets/img/man2.jpg')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: WIDTH - 50,
                                alignItems: 'center',
                                // marginTop: '2%',
                                marginBottom: '8%',
                            }}
                        >
                            <View style={{}}>
                                <View>
                                    <Text style={Styles.txt1}>Categories</Text>
                                </View>

                            </View>
                            <View>
                                <TouchableOpacity onPress={()=>{Actions.categories()}}>
                                    <Text style={Styles.txt3}>See All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{}}>
                        <ScrollView
                            style={{
                                // width: WIDTH - 30,
                                marginLeft: '2.5%',
                            }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            pagingEnabled
                        >
                            <TouchableOpacity>
                                <ImageBackground
                                    source={electricion}
                                    style={Styles.imageStyle2}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            width: WIDTH / 2.5,
                                            height: 50,
                                            opacity: 0.7,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Electrician
                                        </Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <ImageBackground
                                    source={carpenter}
                                    style={Styles.imageStyle2}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            width: WIDTH / 2.5,
                                            height: 50,
                                            opacity: 0.7,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Carpenter
                                        </Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <ImageBackground
                                    source={civilengineer}
                                    style={Styles.imageStyle2}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            width: WIDTH / 2.5,
                                            height: 50,
                                            opacity: 0.7,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Civil Engi.
                                        </Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <ImageBackground
                                    source={painter}
                                    style={Styles.imageStyle2}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            width: WIDTH / 2.5,
                                            height: 50,
                                            opacity: 0.7,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Painter
                                        </Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <ImageBackground
                                    source={electricion}
                                    style={Styles.imageStyle2}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            width: WIDTH / 2.5,
                                            height: 50,
                                            opacity: 0.7,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Professional
                                        </Text>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: WIDTH - 50,
                                // marginBottom: '6%',
                                marginTop: '5%',
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: WIDTH - 50,
                                    alignItems: 'center',
                                    // marginTop: '2%',
                                    marginBottom: '8%',
                                }}
                            >
                                <View style={{}}>
                                    <View>
                                        <Text style={Styles.txt1}>All Advertiesments</Text>
                                    </View>

                                </View>
                                <View>
                                    <TouchableOpacity style={{}}>
                                        <Text style={Styles.txt3}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{
                            flexDirection: 'row',
                            width: WIDTH - 50,
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            borderRadius: 10
                        }}>
                            <View>
                                <Image
                                    style={{width: 150, height: 100, borderRadius: 10}}
                                    source={require('../assets/img/adss.png')}
                                />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View style={{marginTop: '5%'}}>
                                    <Text style={Styles.txt5}>Hasitha Auto Service</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>Baduraliya</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>0719558642</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                </View>
                            </View>
                            <View style={{width: 4}}></View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginTop: '5%'}}>
                        <View style={{
                            flexDirection: 'row',
                            width: WIDTH - 50,
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            borderRadius: 10
                        }}>
                            <View>
                                <Image
                                    style={{width: 150, height: 100, borderRadius: 10}}
                                    source={require('../assets/img/adss.png')}
                                />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View style={{marginTop: '5%'}}>
                                    <Text style={Styles.txt5}>Hasitha Auto Service</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>Baduraliya</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>0719558642</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                </View>
                            </View>
                            <View style={{width: 4}}></View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginTop: '5%', marginBottom: '5%'}}>
                        <View style={{
                            flexDirection: 'row',
                            width: WIDTH - 50,
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            borderRadius: 10
                        }}>
                            <View>
                                <Image
                                    style={{width: 150, height: 100, borderRadius: 10}}
                                    source={require('../assets/img/adss.png')}
                                />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View style={{marginTop: '5%'}}>
                                    <Text style={Styles.txt5}>Hasitha Auto Service</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>Baduraliya</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Styles.txt6}>0719558642</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                    <Image
                                        style={{width: 17, height: 17}}
                                        source={require('../assets/icon/star.png')}
                                    />
                                </View>
                            </View>
                            <View style={{width: 4}}></View>
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
    imageStyle: {
        width: WIDTH - 35,
        height: height / 3.4,
        marginHorizontal: 6,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imageStyle2: {
        width: WIDTH / 2.5,
        height: height / 2.9,
        marginHorizontal: 6,
        borderRadius: 21,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    txt1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        // marginLeft: '5%',
    },
    txt2: {
        fontSize: 28,
        fontWeight: 'bold',
        // marginLeft: '5%',
        color: 'white',
    },
    txt3: {
        fontSize: 15,
        color: '#24b2ff',
        fontWeight: 'bold',
        // marginTop:'4%',
        // marginLeft: '5%',
    },
    txt4: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2f2c33',
        marginLeft: '5%',
    },
    imgview: {
        backgroundColor: 'white',
        opacity: 0.8,
        width: WIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        marginTop: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    imgtxt: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '4%',
        marginTop: '4%',
    },
    txt5: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0a7efa',
    },
    txt6: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {
    changeComponent,
    changeIconComponent,
})(Homenew);
