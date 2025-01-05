import React from "react";
import {TodoIcon} from "."
function DeleteIcon(props){
    return (
        <TodoIcon
            type="delete"
            completed={props.completed}
            onClick={props.onClick}
            color={props.completed ? 'white' : 'white'}
        />
    )
}

export { DeleteIcon }