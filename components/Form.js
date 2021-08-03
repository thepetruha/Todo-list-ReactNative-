import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';

export default function Form( {addJob} ) {
    const [textInput, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder={'Entered job'}/>
        <Button color={'green'} onPress={() => addJob(textInput)} title={'Add job'} />
    </View>
  );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1, 
        borderColor: 'black',
        padding: 10,
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: '20%',
        width: '60%'
    },
})
