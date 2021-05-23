import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import TaskList from './src/components/TaskList'
export default function App() {
  const [task, setTask] = useState([

    { key: 1, task: 'acordar as 9h' },
    { key: 2, task: 'orar' },
    { key: 3, task: 'tomar café' },
    { key: 4, task: 'bater na Tété amor' },

  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0A0A2A" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Minhas tarefas</Text>
      </View>
      <FlatList
      marginHorizontal= {10}
        showsVerticalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A2A',
  },
  title: {
    marginTop: 50,
    paddingBottom: 10,
    fontSize: 35,
    textAlign: 'center',
    color: '#FFFF'

  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  }
});
