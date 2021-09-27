/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {Fragment, useEffect} from 'react';
// import {
//   SafeAreaView,
//   // ScrollView,
//   StatusBar,
//   // StyleSheet,
//   // Text,
//   // useColorScheme,
//   // View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Styled from 'styled-components/native';

// import React, {useEffect} from 'react';

// import SplashScreen from 'react-native-splash-screen';

// import {StatusBar} from 'react-native';
// import Navigator from './Screens/Navigator';
// import {UserContextProvider} from './Context/User';

// const App = () => {
//   useEffect(() => {
//     try {
//       setTimeout(() => {
//         SplashScreen.hide();
//       }, 2000);
//     } catch (e) {
//       console.log(e);
//     }
//   });

//   return (
//     <UserContextProvider>
//       <StatusBar barStyle="light-content" />
//       <Navigator />
//     </UserContextProvider>
//   );
// };

// export default App;

import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';

import {UserContextProvider} from '~/Context/User';
const App = () => {
  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </UserContextProvider>
  );
};
export default App;
