import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <Text style={styles.container}>Hello world</Text>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    paddingTop: 400,
    textAlign: "center"
    
  }
});
