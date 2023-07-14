import React from 'react'
import "./TodoList.css"
import { useState } from 'react'
import useAutoFocus from "./useAutoFocus"
import Todos from './Todos';
import CompletedTodos from './CompletedTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons'

const TodoPage = () => {
    const [text, setText] = useState('');
    const [value,setValue]=useState('')
    const [allTodos,setAllTodos]=useState([]);
    const itemInput=useAutoFocus();

    const addTodo=()=>{
        setAllTodos([
            ...allTodos,
            {
            task:value,
            id:crypto.randomUUID(),
            edited:false,
            completed:false
            }])
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        addTodo()
        setValue('')
    }

    //when clicking checkbox
    const toggleTodo=(id)=>{
        setAllTodos((currentTodos)=>{
            return currentTodos.map(todo=>{
                if (todo.id===id){
                return {...todo, completed:!todo.completed}
                }
                return todo
            })
        })
    }

    //when clicking the edit buton
    const handleEdit=(id)=>{
        setAllTodos(allTodos.map(todo=>todo.id===id ?{
            ...todo, edited:!todo.edited
            }: todo
        ))}

    //when clicking delete buton
    const deleteTodo=(id)=>{
        const newTodos=allTodos.filter(todo=>todo.id!==id)
        setAllTodos(newTodos)
    }
    //when clicking the update task buton- editing mode
    const updateTask= ( updatedTodo,id)=>{
        setAllTodos(allTodos.map(todo=>todo.id===id ? {
          ...todo,  task:updatedTodo, edited:!todo.edited
          }: todo
      ))}

    return(
    <div>
        <div className='navbar'>
            <FontAwesomeIcon icon={faCheckSquare} className="nav--icon" />
            <h1 className="nav--logo_text" >My Todo's</h1>
            <p className="nav--title">
                {allTodos.filter((allTodo)=>!allTodo.completed).length===0?
                    <FontAwesomeIcon icon={faFaceSmileBeam} style={{color: "#00aaff", }} size='2xl' className='nav--icon2'/>:
                    <>
                    <p>remaining tasks:&nbsp; {allTodos.filter((allTodo)=>!allTodo.completed).length}</p>
                    </>
                }
            </p>
        </div>
        <div className='container'>
            <form  className='new-item-form' onSubmit={submitHandler}>
                <input
                    type="text"
                    className='title'
                    placeholder='Title'
                    name="Title"
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                    ref={itemInput}
                />
                <div className='form-row '>
                    <input
                    type='text'
                    id='listItem'
                    placeholder='List item'
                    name="new Item"
                    className='new-item'
                    value={value}
                    onChange={(e)=>{setValue(e.target.value)}}
                    />
                    <button className='btn'type="submit" disabled={!value}>Add</button>
                </div>
            </form>
            <div className='container-todos'>
            {allTodos.filter((allTodo)=>!allTodo.completed).length===0?
                <p style={{fontSize:"14px",marginTop:'3em'}}>
                No tasks for today! Have fun !
                </p>:''}
                <Todos
                allTodos={allTodos}
                toggleTodo={toggleTodo}
                handleEdit={handleEdit}
                deleteTodo={deleteTodo}
                updateTask={updateTask}
                />
            </div>
            <div className='container-completed'>
                <h1 className='headerCompleted'>Completed tasks</h1>
                {allTodos.filter((allTodo)=>allTodo.completed).length===0?
                    <p style={{fontSize:"14px",}}>No tasks have been completed! Hurry up!
                    </p>:''}
                    <CompletedTodos
                    allTodos={allTodos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
            </div>
        </div>
    </div>
    )
}

export default TodoPage;