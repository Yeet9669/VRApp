import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstructorDB = () => {
  const navigation = useNavigation();
  const [classes, setClasses] = useState([
    { title: 'Class 1', description: 'Menu description.', favorite: true },
    { title: 'Class 2', description: 'Menu description.', favorite: true },
    { title: 'Class 3', description: 'Menu description.', favorite: true },
    { title: 'Class 4', description: 'Menu description.', favorite: false },
    { title: 'Class 5', description: 'Menu description.', favorite: false }
  ]);

  const toggleFavorite = (index) => {
    const updatedClasses = classes.map((classItem, idx) =>
      idx === index ? { ...classItem, favorite: !classItem.favorite } : classItem
    );
    setClasses(updatedClasses);
  };

  const addNewClass = () => {
    // Logic for adding a new class
    alert('Add New Class button pressed');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Classes</Text>
        <Text style={styles.greeting}>Hello Instructor</Text>
        <Text style={styles.subTitle}>Here are your classes</Text>

        <View style={styles.classList}>
          {classes.map((item, index) => (
            <View key={index} style={styles.classItem}>
              <Text style={styles.classTitle}>{item.title}</Text>
              <Text style={styles.classDescription}>{item.description}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(index)}>
                <Text style={item.favorite ? styles.favorite : styles.notFavorite}>
                  {item.favorite ? '★' : '☆'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addNewClass}>
          <Text style={styles.addButtonText}>Add New Class</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4B0082', // Set the background color to dark violet
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  classList: {
    width: '100%',
    marginBottom: 20,
  },
  classItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classDescription: {
    fontSize: 14,
  },
  favorite: {
    color: 'gold',
  },
  notFavorite: {
    color: 'black',
  },
  addButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default InstructorDB;
