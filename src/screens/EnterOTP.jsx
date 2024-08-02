import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const EnterOTP = ({route, navigation}) => {
  const {contact} = route.params;
  const [timer, setTimer] = useState(60);
  const [num1, setNum1] = useState('7');
  const [num2, setNum2] = useState('5');
  const [num3, setNum3] = useState('5');
  const [num4, setNum4] = useState('6');
  const [num5, setNum5] = useState('4');
  const [num6, setNum6] = useState('2');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(intervalId);
        setTimer(60);
      }
    }, 1000);
    setTimeout(() => {
      navigation.navigate('tabMenu');
    }, 3000);
    return () => clearInterval(intervalId);
  }, [timer]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/back.png')}
          resizeMode="contain"
          style={{width: 25, height: 25, padding: 15, margin: 10}}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={{
          marginTop: 120,
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
            Enter OTP
          </Text>
          <Text style={{marginTop: 15}}>
            The OTP sent via SMS on this number -{'\n'} {contact}
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num1}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num2}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num3}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num4}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num5}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={num6}
            />
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'sans-serif',
            color: '#686D76',
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 20,
          }}>
          Resend OTP in {timer}s
        </Text>
      </KeyboardAvoidingView>
      <ActivityIndicator style={styles.loader} size={'small'} color={'black'} />
    </View>
  );
};

export default EnterOTP;

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
    width: 50,
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    padding: 15,
    fontSize: 20,
  },
  loader: {
    backgroundColor: '#FFB200',
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 7,
    marginTop: 100,
    alignSelf: 'center',
  },
});
