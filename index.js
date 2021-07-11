import { Navigation } from 'react-native-navigation';

// Screens
import Login from './src/Login';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

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
