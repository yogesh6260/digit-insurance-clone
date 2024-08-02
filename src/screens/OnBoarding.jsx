import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useRef} from 'react';
import Carousel from '../components/CustomCarousel/Carousel';
import DropShadow from 'react-native-drop-shadow';
import {Link} from '@react-navigation/native';
import Slides from '../data/onboardingSlider';

const OnBoarding = ({navigation}) => {
  BackHandler.addEventListener('hardwareBackPress', () =>
    BackHandler.exitApp(),
  );
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={Slides}
            bottomHeight={70}
            dotSize={10}
            itemHeight={'auto'}
          />
        </View>
        <DropShadow style={styles.shadowProps}>
          <View style={styles.bottomContainer}>
            <Text style={styles.heading}>Switch to the Simpler Insurance</Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('mobilelogin')}>
              <Text style={styles.loginBtnText}>Login with Mobile Number</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.loginBtn,
                {
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  backgroundColor: '#F1F1F1',
                  marginTop: 0,
                },
              ]}>
              <Image
                source={require('../assets/google.webp')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
              <Text style={styles.loginBtnText}>Login with Google</Text>
            </TouchableOpacity>
            <Link
              to={'onboarding'}
              style={{
                textDecorationLine: 'underline',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Login with Corporate ID
            </Link>
          </View>
        </DropShadow>
      </View>
    </>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  carouselContainer: {
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: '#FFB200',
    width: '90%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
  },
  loginBtnText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'sans-serif',
  },
  bottomContainer: {
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  heading: {
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
  shadowProps: {
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});
