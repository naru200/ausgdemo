import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
} from 'react-native';

const CreateTodo = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Text style={styles.label}>할 일 이름</Text>
          <TextInput
            style={styles.input}
            placeholder="할 일 제목을 입력해 주세요."
          />
        </View>
      </View>
      <Pressable style={styles.createButton} onPress={() => {}}>
        <Text style={styles.buttonText}>생성하기</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FF9800',
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

CreateTodo.options = {
  topBar: {
    title: {
      text: '할 일 생성',
    },
  },
};

export default CreateTodo;
