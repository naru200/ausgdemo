import { Navigation } from 'react-native-navigation';

// Screens
import Login from './src/Login';

<<<<<<< HEAD
import awsConfig from './src/aws-exports';
import { Amplify } from '@aws-amplify/core';
Amplify.configure(awsConfig);
=======
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
>>>>>>> demo

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
