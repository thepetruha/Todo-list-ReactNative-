import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>List job</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
      paddingTop: 50,
      height: 100, 
      width: '100%',
      backgroundColor: 'silver'
  },
  text: {
    color: 'yellow', 
    fontSize: 18, 
    textAlign: 'center'
  }
})
