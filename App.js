

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Router, Scene ,Drawer, ActionConst} from 'react-native-router-flux';
import Homescreen from './src/Homescreen.js';


const App: () => React$Node = () => {
  return (
    <Homescreen/>
  );
};


export default App;
