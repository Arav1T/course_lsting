
import { createStore, combineReducers } from 'redux';
import courseReducer from './reducers/courseReducer';

const rootReducer = combineReducers({
  course: courseReducer,
});

const store = createStore(rootReducer);

export default store;
