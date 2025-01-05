import ReactDOM from 'react-dom'
function Modal({children}){
    return ReactDOM.createPortal(
        <section>
            {children}
        </section>,
        document.getElementById('modal')
    )
}
export {Modal}