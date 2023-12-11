import {todos} from "../../api/todosService";
import {deleteTodoItemAction, fetchTodosAction} from "./actions";


export const fetchTodosThunk = () => {
    return (dispatch) => {
        todos.get().then((todos) => dispatch(fetchTodosAction(todos)))
    }
}

export const deleteTodoItemThunk = (id) => {
    return(dispatch) => {
        todos.delete(id).then(() => dispatch(deleteTodoItemAction(id)))
    }
}