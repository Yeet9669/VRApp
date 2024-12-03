import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === 'student@example.com' && password === 'password123') {
      // Navigate to the StudentDB screen
      navigation.navigate('StudentDB');
    } else {
      // Show an error alert if credentials are incorrect
      Alert.alert('Login Failed', 'Incorrect email or password');
    }
  };

  const handleRememberMe = () => {
    // Logic to remember user credentials (for demonstration purposes, we'll just toggle the state)
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back Student!</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={handleRememberMe}>
            <View style={styles.checkbox}>
              {rememberMe && <View style={styles.checkboxChecked} />}
            </View>
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.signup}>Don't have an account yet? <Text style={styles.signupLink}>Sign up</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4B0082', // Set the background color to dark violet
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#0f0',
  },
  rememberMeText: {
    color: '#fff',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#fff',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  signup: {
    color: '#fff',
  },
  signupLink: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default StudentLogIn;
