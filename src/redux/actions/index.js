import { ADD_RECIPES, SELECTED_RECIPE, ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionsType"



export const addRecipes = (data)=> ({
    type: ADD_RECIPES,
    payload: {
        data
    }
})

export const selectedRecipe = (data)=> ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
})





export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});