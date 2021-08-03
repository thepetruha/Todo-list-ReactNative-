import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ListItems( {el, deleteItem} ) {
  return (
    <TouchableOpacity onPress={() => deleteItem(el.key)}>
       <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    text: {
        padding: 20, 
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
        color: 'black',
    }
})
