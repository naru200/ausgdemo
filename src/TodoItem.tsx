import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import checkbox from './assets/checkbox.png';

const TodoItem = ({ title, timestamp }: any) => {
  return (
    <View style={styles.todoContainer}>
      <Image
        source={checkbox}
        style={{ width: 24, height: 24, marginRight: 12 }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FF9800',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 13,
    color: 'grey',
  },
  bodyText: {
    marginLeft: 12,
    fontSize: 15,
  },
});

export default TodoItem;
