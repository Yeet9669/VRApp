import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        
        <Text style={styles.description}>Create an account as a student to access courses.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudentSU')}>
          <Text style={styles.buttonText}>Student Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.loginPrompt}>
          Already have a Student account?
          <Text style={[styles.link, styles.loginLink]} onPress={() => navigation.navigate('StudentLogIn')}> Log In</Text>
        </Text>
        
        <Text style={styles.description}>Create an account as an instructor to monitor student progress.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstructorSU')}>
          <Text style={styles.buttonText}>Instructor Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.loginPrompt}>
          Already have an Instructor account?
          <Text style={[styles.link, styles.loginLink]} onPress={() => navigation.navigate('InstructorLogIn')}> Log In</Text>
        </Text>

        <Text style={styles.agreementText}>
          By using the app, I agree to the 
          <Text style={[styles.link, styles.loginLink]} onPress={() => navigation.navigate('TermsOfService')}> Terms of Service</Text> and 
          <Text style={[styles.link, styles.loginLink]} onPress={() => navigation.navigate('PrivacyPolicy')}> Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4B0082', // Set the background color to dark violet
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginPrompt: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
  link: {
    color: '#6a1b9a',
    textDecorationLine: 'underline',
  },
  loginLink: {
    color: '#ffffff', // Set the Log In, Terms of Service, and Privacy Policy link colors to white
  },
  agreementText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
