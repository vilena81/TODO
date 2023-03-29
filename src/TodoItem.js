
export default function TodoItem({todo, dispatch}){
    function deleteTodo(){
        return dispatch({type:"DELETE_TODO", payload:todo.id})
    }
    return(
        <div>
            <ul style={{display:"flex", alignItems:"center"}}>
                <li>{todo.text}</li>
                <button  onClick={deleteTodo}>X</button>
            </ul>
        </div>
    )
}