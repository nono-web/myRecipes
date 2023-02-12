import { combineReducers } from '@reduxjs/toolkit';
import { recipes } from './recipes';
import { tacksList} from './tasksList';

export const rootReducer = combineReducers({
  recipes,
  tacksList,
});
