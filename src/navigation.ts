import { Navigation } from 'react-native-navigation';

// Screens
import Main from './Main';
import CreateTodo from './CreateTodo';

Navigation.registerComponent('MainScreen', () => Main);
Navigation.registerComponent('CreateTodoScreen', () => CreateTodo);

export const setRootToMain = () => {
  Navigation.setRoot({
    root: {
      // Stack Navigator
      stack: {
        children: [
          {
            component: {
              name: 'MainScreen',
            },
          },
        ],
      },
    },
  });
};
