import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CreateAccountScreen from './CreateAccountScreen.js';
import StudentLogIn from './StudentLogIn.js';
import StudentDB from './StudentDB.js';
import InstructorLogIn from './InstructorLogIn.js';
import InstructorDB from './InstructorDB.js';
import StudentSU from './StudentSU.js'; // Import the new screen
import InstructorSU from './InstructorSU.js'; // Import the new screen

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('./assets/VR_Heart_Dissection_Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.buttonText}>OPEN</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerTitle: 'Create an Account' }} />
        <Stack.Screen name="StudentLogIn" component={StudentLogIn} options={{ headerTitle: 'Student Log In' }} />
        <Stack.Screen name="StudentDB" component={StudentDB} options={{ headerTitle: 'Student Dashboard' }} />
        <Stack.Screen name="InstructorLogIn" component={InstructorLogIn} options={{ headerTitle: 'Instructor Log In' }} />
        <Stack.Screen name="InstructorDB" component={InstructorDB} options={{ headerTitle: 'Instructor Dashboard' }} />
        <Stack.Screen name="StudentSU" component={StudentSU} options={{ headerTitle: 'Student Sign Up' }} /> 
        <Stack.Screen name="InstructorSU" component={InstructorSU} options={{ headerTitle: 'Instructor Sign Up' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B0082', // Set the background color to dark violet
  },
  logo: {
    width: 575,
    height: 575,
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 180,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 5,
    borderRadius: 10,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
