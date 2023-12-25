import {useState} from "react";
import {v4 as uuid4} from "uuid";

export default function  TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuid4()}]);
    let[newTodo,setNewTodo]=useState([""]);
    let addNewTask=()=>{
        // console.log("We have to log new task to TODO List");
        setTodos((preTodos)=>{
            return [...preTodos,{task:newTodo,id:uuid4(),isDone:false}];
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value)
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        // console.log(id);
        setTodos((preTodos)=>todos.filter((preTodos)=>preTodos.id!=id));
    }

    let markAllDone =()=>{
        // console.log("Upper Case All");
       setTodos((preTodos)=>
        preTodos.map((todo)=>
        {
            // console.log(todo);
            return{
                ...todo,
                // task:todo.task.toUpperCase(),
                isDone:true,
                };
            })
        );
    };

    let markAsDone=(id)=>{
        setTodos((preTodos)=>
            preTodos.map((todo)=>{
                if (todo.id==id){
                    return{
                        ...todo,
                        // task:todo.task.toUpperCase(),
                        isDone:true
                    }
                }
                else{
                    return todo;
                }
                    
            }
        ))
    }
    

    return (
        <div>
            <input type="text" placeholder="Add A Task" 
            value={newTodo} onChange={updateTodoValue}/> <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                    &nbsp; &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                    </li>

                ))}
            </ul>
            <br />
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>

    );

}