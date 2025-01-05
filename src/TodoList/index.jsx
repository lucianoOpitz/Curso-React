function TodoList({children}){
    return(
        <ul style={{width:"100vmin", padding:0, marginBottom:100}}>
            {children}
        </ul>
    )
}
export { TodoList }