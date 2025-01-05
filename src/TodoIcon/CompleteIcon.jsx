import React from "react";
import {TodoIcon} from "."
function CompleteIcon(props){
    return (
        <TodoIcon
            type="check"
            completed={props.completed}
            onClick={props.onClick}
            color={props.completed ? 'yellow' : 'white'}
        />
    )
}

export { CompleteIcon }