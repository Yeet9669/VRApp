import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentDB = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [classCode, setClassCode] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const savedProfileImage = await AsyncStorage.getItem('profileImage');
        const savedSurname = await AsyncStorage.getItem('surname');
        const savedName = await AsyncStorage.getItem('name');

        if (savedProfileImage) {
          setProfileImage(savedProfileImage);
        }

        if (savedSurname) {
          setSurname(savedSurname);
        }

        if (savedName) {
          setName(savedName);
        }
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    };

    loadProfileData();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.Images, ImagePicker.MediaType.Videos], // Updated mediaTypes
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUri = result.uri;

      if (imageUri) {
        setProfileImage(imageUri);
        await AsyncStorage.setItem('profileImage', imageUri);
      } else {
        await AsyncStorage.removeItem('profileImage');
      }
    }
  };

  const handleSurnameChange = async (text) => {
    setSurname(text);
    await AsyncStorage.setItem('surname', text);
  };

  const handleNameChange = async (text) => {
    setName(text);
    await AsyncStorage.setItem('name', text);
  };

  const handleJoinClass = () => {
    Alert.alert('Class Code Submitted', `You entered: ${classCode}`);
    setClassCode(''); // Clear the input field
    toggleModal(); // Close the modal
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={profileImage ? { uri: profileImage } : require('./assets/blank-user.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.headerText}
            placeholder="Surname"
            placeholderTextColor="#ecf0f1"
            value={surname}
            onChangeText={handleSurnameChange}
          />
          <TextInput
            style={styles.headerText}
            placeholder="Name"
            placeholderTextColor="#ecf0f1"
            value={name}
            onChangeText={handleNameChange}
          />
          <Text style={styles.descriptionText}>Description</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.greetingText}>Hello Student</Text>
          <Text style={styles.classListText}>Here are your classes</Text>
          <View style={styles.classItem}>
            <Text style={styles.classTitle}>Class 1</Text>
            <Text style={styles.classDescription}>Human Heart Dissection</Text>
          </View>
          <View style={styles.classItem}>
            <Text style={styles.classTitle}>Class 2</Text>
            <Text style={styles.classDescription}>Menu description</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Enter New Class Code</Text>
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter class code"
                placeholderTextColor="#888"
                value={classCode}
                onChangeText={setClassCode}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, styles.joinButton]} onPress={handleJoinClass}>
                  <Text style={styles.modalButtonText}>Join Class</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#4B0082', // Set the background color to dark violet
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 15, // Reduced padding to make the background border smaller
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    color: '#ecf0f1',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, // Reduced margin to make the background border smaller
  },
  descriptionText: {
    color: '#ecf0f1',
    fontSize: 16,
  },
  content: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%', // Adjusted to match the layout
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classListText: {
    fontSize: 16,
    marginBottom: 20,
  },
  classItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align class items
    marginBottom: 10,
    width: '100%', // Ensure class items take full width
  },
  classTitle: {
    fontWeight: 'bold',
  },
  classDescription: {
    fontSize: 16,
    flexShrink: 1, // Ensure text wraps if needed
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20, // Added margin top to match layout
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#ccc',
  },
  modalButtonText: {
    fontSize: 16,
  },
  joinButton: {
    backgroundColor: '#8e44ad',
  },
});

export default StudentDB;
