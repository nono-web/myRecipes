import { API_KEY, URL_API, MAX_PER_PAGE } from '@env';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addRecipes, selectedRecipe, selectedSteps } from '../../redux/actions';

export const useFetchRecipes = () => {

  const dispatch = useDispatch()

  const getAllRecipes = async (page) => {
    try {
      const res = await axios.get(URL_API, {
        params: {
          apiKey: API_KEY,
          number: MAX_PER_PAGE,
          offest : page * MAX_PER_PAGE
        },
      });
      dispatch(addRecipes(res.data.results))
    } catch (e) {
      console.log(e);
    }
  };

  const getRecipeById = async (id)=> {
try{
  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {   
  params: {
    apiKey: API_KEY,
  },
})
dispatch(selectedRecipe(res.data))
} catch (e) {
      console.log(e);
    }
  }

  const getSteps = async (id)=> {
    try{
      const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`, {   
      params: {
        apiKey: API_KEY,
      },
    })
    dispatch(selectedSteps(res.data))
    } catch (e) {
          console.log(e);
        }
      }
  return { getAllRecipes,getRecipeById, getSteps  };
};
