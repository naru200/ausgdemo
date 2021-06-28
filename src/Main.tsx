import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const Main = () => {
  const arr = [1, 2, 3];

  return (
    <SafeAreaView>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.container}>
          {arr.map(item => (
            <TodoItem key={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '100%',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

Main.options = {
  topBar: {
    title: {
      text: 'Todos',
    },
  },
};

export default Main;
