import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getSelectedRecipe, getSelectedSteps } from '../../redux/selector';
import Ingredients from './Ingredients';

const RecipesDetails = ({ route }) => {
  const recipe = useSelector(getSelectedRecipe);


  const { id } = route.params;
  const { getRecipeById } = useFetchRecipes();

  useEffect(() => {
    getRecipeById(id);
  }, []);

  if (!recipe) {
    return <View />;
  }
  return (
    <>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>
        Ready in {recipe.readyInMinutes} minutes
      </Text>
      <View style={styles.containerIng}>
        <Text style={styles.titleIng}>Ingrédients : </Text>
        {recipe.extendedIngredients?.map((ing) => (
         <Ingredients ing={ing} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerIng: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 6,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    
  },
  image: {
    width: '100%',
    height: '30%',
    marginBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  titleIng: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
  },
});

export default RecipesDetails;
