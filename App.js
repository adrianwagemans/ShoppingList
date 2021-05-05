import React,{useState}from 'react';
import {View,StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';




const App = ()=>{
  const [items, setItem] = useState([
    {id: Math.random()*10, text: 'milk'},
    {id: Math.random()*10, text: 'eggs'},
    {id: Math.random()*10, text: 'milk'},
    {id: Math.random()*10, text: 'eggs'},
  ]);

  const deleteItem = (id) => {
    setItem(prevItems => {
      return prevItems.filter (item => item.id != id);
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item',[{ text: "OK"}])
  
    }
    else {
    setItem(prevItems => {
      return[{id:Math.random()*10, text}, ...prevItems]
    });
  }
  };

  return(
    <View style={styles.container}>
      <Header title='shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem deleteItem={deleteItem} item={item}/>}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  
    
  }

});
export default App;