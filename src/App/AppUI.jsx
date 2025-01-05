import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { LoadingTareas } from '../LoadingTareas';
import { ErrorLoadedTareas } from '../ErrorLoadedTareas';
import { EmptyTareas } from '../EmptyTareas';
import { TareaContext } from '../TareaContext';
import { TareaForm } from '../TareaForm'
import {Modal} from '../Modal'
function AppUI(){
    const tareaLoad = ["a","b","c","d","e"]
    const {loading, error, searchedTareas, tareaFinished, tareaDeleted, openModal} = React.useContext(TareaContext)
    return(
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {(loading) && tareaLoad.map(tareaCargando => (<LoadingTareas key={tareaCargando}/>))}
                {error && <ErrorLoadedTareas/>}
                {(!loading && searchedTareas.length === 0) && <EmptyTareas/>}
                {searchedTareas.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => tareaFinished(todo.text)}
                    onDelete={() => tareaDeleted(todo.text)}
                  />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TareaForm/>
                </Modal>
            )}
            <CreateTodoButton/>
        </>
    )
}
export {AppUI}