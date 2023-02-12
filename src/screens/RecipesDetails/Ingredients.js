import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

const Ingredients = ({ ing }) => {
  const dispatch = useDispatch();

  const onAddIngredient = () => {
    dispatch(addTask(`ingredient : ${ing.name}`));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ing.name}</Text>
      <TouchableOpacity style={styles.btn} onPress={onAddIngredient}>
        <Text>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flexDirection :"row",
   justifyContent :"space-between",
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    
  },
  btn: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 5,


  },
});
export default Ingredients;
