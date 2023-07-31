import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons'
import List from './List';
import SideBar from './SideBar'
import ExistingList from './ExistingList'

const MainPage = () => {
    const [title, setTitle] = useState('');
    const [allLists,setAllLists]=useState(() => JSON.parse(localStorage.getItem("MyLists")) || [])
    const [tableId,setTableId]=useState('')
    const [value,setValue]=useState('')
    const [allTodos,setAllTodos]=useState([]);
    const [editMode,setEditMode]=useState(false)

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

    const submitNewTodoItem=(e)=>{
        e.preventDefault()
        addTodo()
        setValue('')
    }

    const addNewList=()=>{
        setAllLists([
            ...allLists,
            {
            title:title,
            id:crypto.randomUUID(),
            allTodos:allTodos
            }
        ])
        setTableId('')
        setTitle('')
        setValue('')
        setAllTodos([])
    }

    const currentList =
    allLists.find(list => list.id === tableId) || allLists[0]

    useEffect(()=>{
        localStorage.setItem('MyLists',JSON.stringify(allLists))
      },[allLists])

//Compelte todo item/  checkbox
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

//Delete Todo item/ delete button
const deleteTodo=(id)=>{
    const newTodos=allTodos.filter(todo=>todo.id!==id)
    setAllTodos(newTodos)
}

//Edit todo item/  edit buton without rearranging the todos
// const handleEdit=(id)=>{
//     setAllTodos(allTodos.map(todo=>todo.id===id ?{
//         ...todo, edited:!todo.edited
//         }: todo
//     ))}

//Edit todo item/  edit buton
    function handleEdit(id) {
        setAllTodos((todos)=>{
          let newArray=[]
          for (let i=0; i<todos.length; i++){
            const todo = todos[i]
            if (todo.id===id){
              newArray.unshift({...todo, edited:!todo.edited})
            }else{
              newArray.push(todo)
            }
          }
        return newArray
        })
      }

//Update edited todo item/ update task buton
const updateTask= ( updatedTodo,id)=>{
    setAllTodos(allTodos.map(todo=>todo.id===id ? {
      ...todo,  task:updatedTodo, edited:!todo.edited
      }: todo
  ))}

//Delete List/ delete button
const deleteList=(id)=>{
    const newList=allLists.filter(allist=>allist.id!==id)
    setAllLists(newList)
}

// //Edit an existing List without rearranging the lists
// const updateList=(id,updatedTitle,updatedAllTodos)=>{
//     setAllLists(allLists.map(list=>list.id===id?{
//         ...list,
//         title:updatedTitle,
//         allTodos:updatedAllTodos,
//         }:list
//         ))
//     }

//Edit an existing List and display it first
    function updateList(id,updatedTitle,updatedAllTodos) {
        setAllLists((lists)=>{
          let newArray=[]
          for (let i=0; i<lists.length; i++){
            const list = lists[i]
            if (list.id===id){
              newArray.unshift({...list, title:updatedTitle,allTodos:updatedAllTodos,})
            }else{
              newArray.push(list)
            }
          }
        return newArray
        })
      }

return(

    <div className='container'>
        <div className='header'>
            <div className='header--div'>
            <FontAwesomeIcon icon={faCheckSquare} className="header--icon"/>
            <h1 className="header--logo_text" >My Todo's</h1>
            </div>
        </div>
        <div className='container-main'>
            <SideBar
            allLists={allLists}
            setTableId={setTableId}
            deleteList={deleteList}
            setAllLists={setAllLists}
            editMode={editMode}
            setEditMode={setEditMode}
            addNewList={addNewList}
            setTitle={setTitle}
            setValue={setValue}
            setAllTodos={setAllTodos}
            />
            <div className='right-side'>
                {tableId && allLists.length>0?
                <ExistingList
                    allTodos={currentList.allTodos}
                    title={currentList.title}
                    updateList={updateList}
                    id={currentList.id}
                    setTableId={setTableId}
                    allLists={allLists}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    toggleTodo={toggleTodo}
                    handleEdit={handleEdit}
                    deleteTodo={deleteTodo}
                />
                :
                <List
                    allTodos={allTodos}
                    toggleTodo={toggleTodo}
                    handleEdit={handleEdit}
                    deleteTodo={deleteTodo}
                    updateTask={updateTask}
                    addNewList={addNewList}
                    submitNewTodoItem={submitNewTodoItem}
                    title={title}
                    setTitle={setTitle}
                    value={value}
                    setValue={setValue}
                />
                }
        </div>
        </div>
    </div>
    )
}

export default MainPage;