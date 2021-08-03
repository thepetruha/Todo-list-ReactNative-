import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItems from './components/ListItem';
import Form from './components/Form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Buy mink',  key: '1'},
    {text: 'Buy car',   key: '2'},
    {text: 'need vape', key: '3'},
    {text: 'buy home',  key: '4'},
  ]);

  const addJob = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  };

  const deleteItem = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  };

  return (
    <View>
      <Header />
      <Form addJob={addJob} />
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItems el={item} deleteItem={deleteItem}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
