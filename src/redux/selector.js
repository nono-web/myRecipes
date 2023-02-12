export const getRecipesList = store => store.recipes.list
export const getSelectedRecipe = store => store.recipes.selectedRecipe


export const getTasks = store => store.tacksList;

export const getCompletedTasks = (store) =>
  store.tacksList.filter((task) => task.isCompleted);