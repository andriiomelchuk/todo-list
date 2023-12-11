import React from "react";
import BasicListItem from '../List/BasicListItem'
import List from '@mui/material/List';


const BasicList = ({todos, handleDelete}) => {

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {todos.map((todo) => (
                <BasicListItem key={todo.index} todo={todo} handleDelete={handleDelete}/>
            ))}
        </List>
    )

}

export default BasicList

