import React, {useEffect} from "react";
import BasicList from '../components/List/BasicList'
import {useDispatch, useSelector} from "react-redux";
import {deleteTodoItemThunk, fetchTodosThunk} from "../store/todos/thunks";

const TodoPage = () => {
    const {todos} = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchTodosThunk());
    }, [dispatch])

    const onDelete = (id) => {
        dispatch(deleteTodoItemThunk(id))
    }

    return (
        <>
            <BasicList todos={todos} handleDelete={onDelete}/>
        </>
    );
}

export default TodoPage;