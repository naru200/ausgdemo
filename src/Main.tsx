import React, { useEffect, useState } from 'react';
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

// Amplify
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

const Main = (props: any) => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const models = await DataStore.query(Todo);
      setData(models);
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.container}>
<<<<<<< HEAD
          {data.map(item => (
            <TodoItem
              key={item.id}
              title={item.title}
              timestamp={item.timestamp}
            />
          ))}
=======
          {data.length > 0 ? (
            data.map(item => (
              <TodoItem title={item.titl} timestamp={item.timestamp} />
            ))
          ) : (
            <Text style={{ color: 'gray' }}>아이템이 존재하지 않습니다.</Text>
          )}
>>>>>>> demo
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
    paddingBottom: 40,
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
