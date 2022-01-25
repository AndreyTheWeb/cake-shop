<<<<<<< HEAD
import { createStore } from "redux"; 

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
=======
import { createStore } from 'redux';

>>>>>>> 5448e0c (try to use redux)
