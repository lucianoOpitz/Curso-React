import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import "./TodoItem.css"
function TodoItem(props){
    return(
      <li className={`tarea ${props.completed && "tarea-completed"}`}>
        <CompleteIcon completed={props.completed} onClick={props.onComplete}/>
        <p className={`title-tarea ${props.completed && "title-tarea--complete"}`}>{props.text}</p>
        <DeleteIcon onClick={props.onDelete}/>
      </li>
    );
}
export { TodoItem }