import { Navigation } from 'react-native-navigation';

// Screens
import Main from './Main';

Navigation.registerComponent('MainScreen', () => Main);

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
