import {
  ADD_RECIPES,
  SELECTED_RECIPE,
  SELECTED_STEPS,
} from '../actions/actionsType';

const initialState = {
  list: [],
  selectedRecipe: {},
  selectedSteps: {},
};

export const recipes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        selectedSteps: state.selectedSteps,
        selectedRecipe: state.selectedRecipe,
        list: [...state.list, ...action.payload.data],
      };
    case SELECTED_RECIPE:
      return {
        selectedRecipe: action.payload.data,
        list: state.list,
        selectedSteps: state.selectedSteps,
      };
    case SELECTED_STEPS:
      return {
        selectedRecipe: state.selectedRecipe,
        list: state.list,
        selectedSteps: action.payload.data,
      };

    default:
      return state;
  }
};
