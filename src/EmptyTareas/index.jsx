import './EmptyTareas.css'
import { ReactComponent as FlechaSVG} from './flecha.svg'
function EmptyTareas(){
    return(
        <>
            <h2 className='title-empty-tareas'>Cree una Nueva Tarea...</h2>
            <section className='empty-tareas'>
                <h3 className='text-empty-tarea'>Crear Tareas</h3>
                <section className='box-icon'>
                    <FlechaSVG className='icon-flecha' fill='white'/>
                </section>
            </section>
        </>
    )
}
export {EmptyTareas}