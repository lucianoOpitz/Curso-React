import React from "react";
import "./TodoCounter.css";
import { TareaContext } from "../TareaContext"
function TodoCounter(){
  const {tareasCompletadas, tareas} = React.useContext(TareaContext)
  return(
    <h1 className="todo-counter">Completaste <span>{tareasCompletadas}</span> de <span>{tareas.length}</span> tareas.</h1>
  )
}
export { TodoCounter }