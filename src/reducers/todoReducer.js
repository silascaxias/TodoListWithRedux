import {ADD_TODO, DELETE_TODO} from '../actions/types';

const initialState = {
    todosList: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return { 
                ...state,
                todosList: state.todosList.concat({
                    id: Math.random(),
                    title: action.data
                })
            } 
        case DELETE_TODO:
            return{
                ...state,
                todosList: state.todosList.filter((item) => item.id !== action.data)
            };
        default: return state;
    }
}

export default todoReducer;