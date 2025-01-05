import React from "react"
import "./CreateTodoButton.css"
import '../TodoIcon'
import { ReactComponent as AddTarea } from '../TodoIcon/delete.svg'
import { TareaContext } from "../TareaContext"
function CreateTodoButton(){
    const {openModal, setOpenModal, setInputNewTareaValue} = React.useContext(TareaContext)
    return(
        <button className={`new-tarea ${openModal && 'new-tarea--active'}`} onClick={()=>{
            if(openModal === true){
                setOpenModal(false)
                setInputNewTareaValue('')
            }else{
                setOpenModal(true)
            }
        }}>
            <AddTarea className='icon-add-svg' fill='white'/>
        </button>
    )
}
export { CreateTodoButton }