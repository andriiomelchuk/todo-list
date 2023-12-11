import {DELETE_TODO_ITEM, FETCH_TODOS_LIST} from "./actions";

const initialState = {
    todos: [],
}

const todosReducer = (state = initialState, { type,payload }) => {
    switch (type) {
        case FETCH_TODOS_LIST:
            return {...state, todos: [...payload]};
        case DELETE_TODO_ITEM:
            const updateTodos = state.todos.filter((todo) => todo.id !== payload);
            return {...state, todos: [...updateTodos]}
        default:
            return state;
    }
}

export default todosReducer;