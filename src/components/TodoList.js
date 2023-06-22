import React from 'react'
import "./TodoList.css"
import { useState } from 'react'
import useAutoFocus from "./useAutoFocus"
import ListOfGoals from './ListOfTodos';

const TodoList = () => {
    const [text, setText] = useState('');
    const [value,setValue]=useState('')
    const [allTodos,setAllTodos]=useState([]);
    const itemInput=useAutoFocus();

    console.log(`newItem:`)
    console.log(value)

    const addTodo=()=>{
        setAllTodos([
            ...allTodos,
            {
            task:value,
            id:crypto.randomUUID(),
            edited:false,
            completed:false
            }
        ])
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        addTodo()
        setValue('')
    }
    console.log(`allTodos=`); console.log(allTodos);
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

    const handleEdit=(id)=>{
        setAllTodos(allTodos.map(todo=>todo.id===id ?{
            ...todo, edited:!todo.edited
            }: todo
        ))}

    const deleteTodo=(id)=>{
        const newTodos=allTodos.filter(todo=>todo.id!==id)
        setAllTodos(newTodos)
    }
    const updateTask= ( updatedTodo,id)=>{
        setAllTodos(allTodos.map(todo=>todo.id===id ? {
          ...todo,  task:updatedTodo, edited:!todo.edited
          }: todo
      ))}

    return(
    <div className='container'>
        <form className='new-item-form' onSubmit={submitHandler}>
            <input
                type="text"
                className='title'
                placeholder='Title'
                name="Title"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}/>
            <div  className='form-row '>
                <input
                    type='text'
                    id='listItem'
                    placeholder='List item'
                    name="new Item"
                    className='new-item'
                    value={value}
                    onChange={(e)=>{setValue(e.target.value)}}
                    ref={itemInput}
                />
                <button className='btn'type="submit" disabled={!value}>Add</button>
            </div>
        </form>
        <ListOfGoals
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        toggleTodo={toggleTodo}
        handleEdit={handleEdit}
        deleteTodo={deleteTodo}
        newItem={value}
        setNewItem={setValue}
        updateTask={updateTask}
        />
    </div>

    )
}

export default TodoList;





// /////import React from 'react'
// import "./TodoList.css"
// import { useState } from 'react'
// import useAutoFocus from "./useAutoFocus"
// import ListOfGoals from './ListOfTodos';

// const TodoList2 = () => {
//     const [text, setText] = useState("");
//     const [newItem,setNewItem]=useState({  
//         value:'',
//         id: '',
//         completed:false,
//         edited:false,})
//     const [allTodos,setAllTodos]=useState([]);
//     const itemInput=useAutoFocus();

//     const changeHandler=(e)=>{
//         setNewItem({
//             ...newItem,
//             value:e.target.value,
//             id:crypto.randomUUID()
//         })
//     }
//     console.log(`newItem:`)
//     console.log(newItem)


//     const addTodos=(newTodo)=>{ setAllTodos([...allTodos, newTodo]); console.log(`allTodos=`); console.log(allTodos)}
   
//     const submitHandler=(e)=>{
//         e.preventDefault()
//         addTodos(newItem)
//         setNewItem({
//             value:'',
//             id:'',
//             completed:false,
//             edited:false,})
//     }

//     const toggleTodo=(id)=>{
//         setAllTodos((currentTodos)=>{
//             return currentTodos.map(todo=>{
//                 if (todo.id===id){
//                 return {...todo, completed:!todo.completed}
//                 }
//                 return todo
//             })
//         })
//     }

//     const handleEdit=(id)=>{
//         setAllTodos(allTodos.map(todo=>todo.id===id ?{
//             ...todo, edited:!todo.edited
//             }: todo
//         ))}

//     const deleteTodo=(id)=>{
//         const newTodos=allTodos.filter(todo=>todo.id!==id)
//         setAllTodos(newTodos)
//     }


//     return(
//     <div className='container'>
//         <form className='new-item-form' onSubmit={submitHandler}>
//             <input
//                 type="text"
//                 className='title'
//                 placeholder='Title'
//                 name="Title"
//                 value={text}
//                 onChange={(e)=>{setText(e.target.value)}}/>
//             <div  className='form-row '>
//                 <input
//                     type='text'
//                     id='listItem'
//                     placeholder='List item'
//                     name="new Item"
//                     className='new-item'
//                     value={newItem.value}
//                     onChange={changeHandler}
//                     ref={itemInput}
//                 />
//                 <button className='btn'type="submit" disabled={!newItem.value}>Add</button>
//             </div>
//         </form>
//         <ListOfGoals 
//         allTodos={allTodos}
//         setAllTodos={setAllTodos}
//         toggleTodo={toggleTodo}
//         handleEdit={handleEdit}
//         deleteTodo={deleteTodo}
//         newItem={newItem}
//         setNewItem={setNewItem}
//         />
//     </div>

//     )
// }

// export default TodoList2;