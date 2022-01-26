import { combineReducers } from "redux";

import filters from './filters';
import cakes from './cakes';

const rootReducer = combineReducers({
  filters,
  cakes
}); 

export default rootReducer;