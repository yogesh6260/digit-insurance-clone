import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmsRetriever from 'react-native-sms-retriever';

const MobileLogin = ({navigation}) => {
  const [disable, setDisable] = useState(true);
  const [enable, setEnable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (phoneNumber === '') {
      requestPermissions();
    }
    if (enable === true) {
      setTimeout(() => {
        navigation.navigate('enterotp', {contact: phoneNumber});
      }, 2000);
    }
  }, [enable]);

  const requestPermissions = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Permission granted
      console.log('Permission granted');
      const contact = await SmsRetriever.requestPhoneNumber();
      setPhoneNumber(contact.split('+91')[1]);
      setEnable(true);
    } else {
      // Permission denied
      Alert.alert('Permission Denied!');
    }
  };

  const handleOnChange = txt => {
    setPhoneNumber(txt);
    if (txt === '') {
      setDisable(true);
      setEnable(false);
    } else if (txt.length === 10) {
      setDisable(false);
      setEnable(true);
    } else {
      setDisable(true);
      setEnable(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <KeyboardAvoidingView
        style={{
          marginTop: 170,
          marginLeft: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
            }}>
            Enter Mobile Number
          </Text>
          <Text>We'll send an OTP through SMS</Text>

          <View style={styles.inputContainer}>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
              +91
            </Text>
            <TextInput
              keyboardType="number-pad"
              cursorColor="lime"
              style={styles.input}
              placeholder="Enter 10-digit Number"
              placeholderTextColor={'#B4B4B8'}
              maxLength={10}
              onChangeText={txt => handleOnChange(txt)}
              selectionColor="orange"
              autoFocus={true}
              showSoftInputOnFocus={true}
              autoCorrect={false}
              value={phoneNumber}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              enable
                ? {backgroundColor: '#FFB200'}
                : {backgroundColor: '#DDDDDD'},
            ]}
            disabled={disable}>
            {enable ? (
              <ActivityIndicator size={'small'} color={'black'} />
            ) : null}
            <Text
              style={[
                {fontWeight: '700', fontSize: 17},
                enable ? {color: 'black'} : {color: '#B4B4B8'},
              ]}>
              Send OTP
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: 'sans-serif',
            color: '#686D76',
            alignSelf: 'center',
            position: 'absolute',
            bottom: -220,
          }}>
          Privacy Policy
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 50,
  },
  input: {
    fontSize: 20,
    color: 'black',
    tintColor: '#FFB200',
  },
  btn: {
    width: '90%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 25,
    flexDirection: 'row',
    gap: 5,
  },
});
