import React from "react"
import "./TodoSearch.css"
import { TareaContext } from "../TareaContext"
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TareaContext)
    return(
        <input 
            placeholder="Busque su Tarea..." 
            id="search-tarea"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    )
}
export { TodoSearch }