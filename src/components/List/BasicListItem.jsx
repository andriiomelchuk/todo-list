import React from "react";
import { IconButton , ListItemButton, ListItemIcon, Checkbox, ListItemText, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";

const BasicListItem = ({todo, handleDelete}) => {

    const dispatch = useDispatch();

    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments"  onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon/>
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        //checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': todo.id}}
                    />
                </ListItemIcon>
                <ListItemText id={todo.id} primary={todo.name}/>
            </ListItemButton>
        </ListItem>
    )
}

export default BasicListItem;