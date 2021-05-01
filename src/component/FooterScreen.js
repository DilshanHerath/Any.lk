import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { changeComponent, changeIconComponent } from '../action/FooterAction';
import { connect } from 'react-redux';
import { Button, Footer, FooterTab } from 'native-base';

const { width: WIDTH, height: height } = Dimensions.get('window');

const home = require('../assets/icon/home.png');
const shome = require('../assets/icon/shome.png');

const reminder = require('../assets/icon/cat.png');
const sreminder = require('../assets/icon/scat.png');

const plus = require('../assets/icon/locations.png');
const splus = require('../assets/icon/slocation.png');

const star = require('../assets/icon/filter.png');
const sstar = require('../assets/icon/sfilter.png');

const ads = require('../assets/icon/ads.png');
const sads = require('../assets/icon/sads.png');

class FooterScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Footer style={styles.footerStyles}>
        <FooterTab style={styles.footerTab}>
          <Button
            onPress={() => {
              this.props.changeComponent('Home');
            }}
          >
            <Image
              source={this.props.currentScreen === 'Home' ? shome : home}
              style={styles.allIcons}
            />
          </Button>
          <Button
            onPress={() => {
              this.props.changeComponent('Category');
              // alert('Reminder');
            }}
          >
            <Image
              source={
                this.props.currentScreen === 'Category' ? sreminder : reminder
              }
              style={styles.allIcons}
            />
          </Button>
          <Button
            onPress={() => {
              this.props.changeComponent('Location');
            }}
          >
            <Image
              source={this.props.currentScreen === 'Location' ? splus : plus}
              style={styles.allIcons}
            />
          </Button>
          <Button
            onPress={() => {
              this.props.changeComponent('Filter');
            }}
          >
            <Image
              source={this.props.currentScreen === 'Filter' ? sstar : star}
              style={styles.allIcons}
            />
          </Button>
          <Button
            onPress={() => {
              this.props.changeComponent('Ads');
            }}
          >
            <Image
              source={this.props.currentScreen === 'Ads' ? sads : ads}
              style={styles.allIcons}
            />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

var styles = {
  footerStyles: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    height: 50,
  },
  footerTab: {
    backgroundColor: 'transparent',
  },
  allIcons: {
    width: 26,
    height: 36,
    resizeMode: 'contain',
  },
};
const mapStateToProps = (state) => {
  return {
    currentScreen: state.footer.currentScreen,
    changeIcon: state.footer.changeIcon,
  };
};

export default connect(mapStateToProps, {
  changeComponent,
  changeIconComponent,
})(FooterScreen);
