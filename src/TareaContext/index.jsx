import React from "react"
import { useLocalStorage } from "../Hooks/useLocalStorage"
const TareaContext = React.createContext()
function TareaProvider({children}){
    const {item: tareas, saveItem: setTareas, loading, error} = useLocalStorage('TAREAS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [inputNewTareaValue, setInputNewTareaValue] = React.useState('')
    const tareasCompletadas = tareas.filter(todo => !!todo.completed).length
    const searchedTareas = tareas.filter ((todo) => {
      const tareasCoincidences = todo.text.toLowerCase()
      const searched = searchValue.toLocaleLowerCase()
      return tareasCoincidences.includes(searched)
    })
    const addTareaToList = ()=>{
      if(inputNewTareaValue!=='' && inputNewTareaValue.length > 3){
          tareas.push({text: inputNewTareaValue, completed: false })
          setTareas(tareas)
      }else{
          console.log("Introduzca un nombre de Tarea valido porfavor")
      }
    }
    const tareaFinished = (text) =>{
      const newTareas = [...tareas]
      const index = newTareas.findIndex(
        (todo) => todo.text === text
      )
      newTareas[index].completed = true
      setTareas(newTareas)
    }
    const tareaDeleted = (text) =>{
      const newTareas = [...tareas]
      const index = newTareas.findIndex(
        (todo) => todo.text === text
      )
      newTareas.splice(index,1)
      setTareas(newTareas)
    }
    return(
        <TareaContext.Provider value={{
            loading,
            error,
            tareasCompletadas,
            tareas,
            searchValue,
            setSearchValue,
            searchedTareas,
            tareaFinished,
            tareaDeleted,
            inputNewTareaValue,
            setInputNewTareaValue,
            openModal,
            setOpenModal,
            addTareaToList,
        }}>
            {children}
        </TareaContext.Provider>
    )
}
export {TareaContext , TareaProvider}