import React from 'react';
import { setRootToMain } from './navigation';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
} from 'react-native';

import logo from './assets/ausg-logo.png';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.header}>AWS Cognito 데모 앱</Text>
        <Pressable style={styles.loginButton} onPress={setRootToMain}>
          <Text style={styles.buttonText}>시작하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '100%',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  logo: {
    width: 180,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
  },
  loginButton: {
    width: '100%',
    height: 48,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF9800',
    borderRadius: 8,
  },
  guestLoginButton: {
    width: '100%',
    height: 48,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9800',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

Login.options = {
  topBar: {
    title: {
      text: '시작 화면',
    },
  },
};

export default Login;
