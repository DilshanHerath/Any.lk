import React, {Component} from 'react';
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
import {connect} from 'react-redux';

const {width: WIDTH, height: height} = Dimensions.get('window');
import {changeComponent, changeIconComponent} from '../action/FooterAction';


const img=require('../assets/img/adssss.png')
class ProfileScreen extends Component {
    render() {
        return (

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#e5e1eb',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#1986fa',
                            width: WIDTH,
                            height: height / 5.5,
                            // marginBottom: '3%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                // marginTop: '3%',
                                // marginBottom: '5%',
                                alignItems: 'center',
                                width: WIDTH - 50,
                            }}
                        >
                            <View style={{marginTop: '10%', marginLeft: '5%'}}>
                                <TouchableOpacity

                                >
                                    <Image
                                        style={{width: 40, height: 40}}
                                        source={require('../assets/icon/iconback.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                    <View
                        style={{alignItems: 'center', justifyContent: 'center', marginTop: '-20%', marginBottom: '7%'}}>
                        <View style={{
                            width: WIDTH - 30,
                            backgroundColor: 'white',
                            // borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <View>
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: '-12%',
                                    borderWidth: 3,
                                    borderColor: 'white',
                                    borderRadius: 100,
                                }}
                                       source={require('../assets/img/ProfilePhoto.png')}/>
                            </View>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 28}}>Sanduni Perera</Text>
                            </View>
                            <View style={{marginBottom: '10%', marginTop: '2%'}}>
                                <Text style={{
                                    fontSize: 23, color:
                                        '#999999'
                                }}>Auto Mobile Service Agent</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{marginTop: '9%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 26, marginLeft: '4%'}}>Personal Info</Text>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <View style={{
                            width: WIDTH - 30,
                            // alignItems: 'center',
                            // height: 150,
                            backgroundColor: 'white',
                            marginTop: '2%',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6,
                        }}>
                            <View style={{alignItems: 'center'}}>
                                <View style={{alignItems: 'flex-end', width: WIDTH - 70, marginTop: '-6%'}}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#1986fa',
                                            borderRadius: 100,
                                            width: 50,
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            style={{width: 25, height: 25}}
                                            source={require('../assets/icon/edit.png')}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View style={{
                                    flexDirection: 'row',
                                    width: WIDTH - 80,
                                    alignItems: 'center',
                                    // marginTop: '4%'
                                }}>
                                    <View>
                                        <TouchableOpacity

                                        >
                                            <Image
                                                style={{width: 25, height: 25}}
                                                source={require('../assets/icon/loc2.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft: '10%'}}>
                                        <View>
                                            <Text style={{
                                                fontSize: 17, color:
                                                    '#999999'
                                            }}>Location</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontWeight: 'bold', fontSize: 20,color:'#474a47'}}>Mathugama</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    width: WIDTH - 80,
                                    alignItems: 'center',
                                    marginTop: '5%'
                                }}>
                                    <View>
                                        <TouchableOpacity

                                        >
                                            <Image
                                                style={{width: 25, height: 25}}
                                                source={require('../assets/icon/email.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft: '10%'}}>
                                        <View>
                                            <Text style={{
                                                fontSize: 17, color:
                                                    '#999999'
                                            }}>E-mail</Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color:'#474a47',
                                            }}>sanduniperera981@gmail.com</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    width: WIDTH - 80,
                                    alignItems: 'center',
                                    marginTop: '5%'
                                }}>
                                    <View>
                                        <TouchableOpacity

                                        >
                                            <Image
                                                style={{width: 25, height: 25}}
                                                source={require('../assets/icon/contact.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft: '10%'}}>
                                        <View>
                                            <Text style={{
                                                fontSize: 17, color:
                                                    '#999999'
                                            }}>Telephone</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontWeight: 'bold', fontSize: 20,color:'#474a47'}}>071-9556472</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    width: WIDTH - 80,
                                    alignItems: 'center',
                                    marginTop: '5%'
                                }}>
                                    <View>
                                        <TouchableOpacity

                                        >
                                            <Image
                                                style={{width: 25, height: 25}}
                                                source={require('../assets/icon/flag.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft: '10%'}}>
                                        <View>
                                            <Text style={{
                                                fontSize: 17, color:
                                                    '#999999'
                                            }}>Works at</Text>
                                        </View>
                                        <View style={{marginBottom: '8%'}}>
                                            <Text style={{fontWeight: 'bold', fontSize: 20,color:'#474a47'}}>Hasitha Auto Service -
                                                Baduraliya</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        </View>
                    </View>

                    <View style={{marginTop: '4%', marginBottom: '3%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 26, marginLeft: '4%'}}>Posted Add</Text>
                    </View>


                    <View style={{alignItems: 'center', marginBottom: '5%'}}>
                       <TouchableOpacity>
                           <View style={{
                               flexDirection: 'row',
                               width: WIDTH - 40,
                               justifyContent: 'space-between',
                               backgroundColor: 'white',
                               borderRadius: 10,
                               shadowColor: "#000",
                               shadowOffset: {
                                   width: 0,
                                   height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 4.65,

                               elevation: 8,
                           }}>
                               <View>
                                   <Image
                                       style={Styles.imagestyle}
                                       source={img}
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
                       </TouchableOpacity>
                    </View>

                    <View style={{alignItems: 'center', marginBottom: '5%'}}>
                        <TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                width: WIDTH - 40,
                                justifyContent: 'space-between',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}>
                                <View>
                                    <Image
                                        style={Styles.imagestyle}
                                        source={img}
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
                        </TouchableOpacity>
                    </View>


                    <View style={{alignItems: 'center', marginBottom: '5%'}}>
                        <TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                width: WIDTH - 40,
                                justifyContent: 'space-between',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}>
                                <View>
                                    <Image
                                        style={Styles.imagestyle}
                                        source={img}
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
                        </TouchableOpacity>
                    </View>


                    <View style={{alignItems: 'center', marginBottom: '5%'}}>
                        <TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                width: WIDTH - 40,
                                justifyContent: 'space-between',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}>
                                <View>
                                    <Image
                                        style={Styles.imagestyle}
                                        source={img}
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
                        </TouchableOpacity>
                    </View>

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
})(ProfileScreen);

const Styles = StyleSheet.create({
    txt2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    txt3: {
        fontSize: 18,

    },
    txt4: {
        fontSize: 18,
        marginLeft: '5%',
        color: '#000CAF',
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
    imagestyle:{
        width: 150,
        height: 100,
        borderRadius: 10,
        opacity:0.85,
    },
});
