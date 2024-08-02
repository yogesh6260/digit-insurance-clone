import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('onboarding');
    }, 3000);
  });
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
