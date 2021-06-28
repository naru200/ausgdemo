import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import TodoItem from './TodoItem';
import { Navigation } from 'react-native-navigation';

const Main = (props: any) => {
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
      <Pressable
        style={styles.createButton}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'CreateTodoScreen',
            },
          })
        }>
        <Text style={styles.buttonText}>할 일 생성</Text>
      </Pressable>
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
  createButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 54,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9800',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
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
