export const FETCH_TODOS_LIST = `FETCH_TODOS_LIST`;
export const DELETE_TODO_ITEM = `DELETE_TODO_ITEM`;

export const fetchTodosAction = (todos) => ({
    type: FETCH_TODOS_LIST,
    payload: todos,
})

export const deleteTodoItemAction = (id) => ({
    type: DELETE_TODO_ITEM,
    payload: id,
})