import {createStore, combineReducers} from 'redux';
import todosReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todosReducer: todosReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;