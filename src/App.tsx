import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { UnistylesTheme } from 'react-native-unistyles';

import {theme} from './config/unistyles';

export default function App() {
  return (
   <UnistylesTheme theme={theme}>
      <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
        <StatusBar style="auto" />
      </View>
   </UnistylesTheme>
  );
}
