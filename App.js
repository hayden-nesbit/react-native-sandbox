import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';
import Header from './components/Header'
import RestaurantItem from './components/RestaurantItem'


const App = () => {

  const [items, setItems] = useState([])

  return (
    <View style={styles.container}>
      <Header title='Restaurant list'/>
      <FlatList 
        data={items}
        renderItem={({item}) => <RestaurantItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
