import React from 'react'
import './TareaForm.css'
import { TareaContext } from "../TareaContext"
function TareaForm(props){
    const {openModal, 
        inputNewTareaValue, 
        setInputNewTareaValue, 
        addTareaToList,
        setOpenModal
    } = React.useContext(TareaContext)
    const onSubmit = (event)=>{
        event.preventDefault()
        addTareaToList()
        setInputNewTareaValue('')
        setOpenModal(false)
    }
    const onChange = (event)=>{
        setInputNewTareaValue(event.target.value)
    }
    return (
        <form className={`form-new-tarea ${openModal && "form-new-tarea--active"}`} onSubmit={onSubmit}>
            <label className="label-new-tarea">Nombre de la Tarea</label>
            <textarea
                className="input-new-tarea" 
                placeholder="Introduzca el Nombre de la Tarea"
                value={inputNewTareaValue}
                onChange={onChange}
            />
            <button className="btn-add-tarea" type='submit'>Añadir</button>
        </form>
    )
}
export {TareaForm}