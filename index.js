import { Navigation } from 'react-native-navigation';

// Screens
import Login from './src/Login';

Navigation.registerComponent('LoginScreen', () => Login);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      // Stack Navigator
      stack: {
        children: [
          {
            component: {
              name: 'LoginScreen',
            },
          },
        ],
      },
    },
  });
});
