import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Button,
} from 'react-native';
import FloatingButton from './FloatingButton';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button  title='To Do app' onPress={() => navigation.navigate('ToDo')} />
      <FloatingButton style={{ bottom: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

})