import React from 'react'
import CompletedTodos from './CompletedTodos'
import AddTodos from './AddTodos'
import useAutoFocus from "./useAutoFocus"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import  {ListProps} from './Interfaces'

const List = (props: ListProps) => {
    const itemInput=useAutoFocus();

    return (
    <div className='box'>
        {/* <FontAwesomeIcon
        icon={faThumbTack}
        className='pin'
        size="xl"
        /> */}
        <form  className='new-item-form' onSubmit={props.submitNewTodoItem}>
            <div className='title'>
                <input
                type="text"
                className='title1'
                placeholder='Title'
                name="Title"
                value={props.title}
                onChange={(e)=>{props.setTitle(e.target.value)}}
                ref={itemInput}
                />
            </div>
            <div className='form-row '>
                <input
                type='text'
                id='listItem'
                placeholder='List item'
                className='new-item'
                name="itemList"
                value={props.value}
                onChange={(e)=>props.setValue(e.target.value)}
                />
                <button className='btn'type="submit" disabled={!props.value}>
                    Add
                </button>
            </div>
        </form>
        <AddTodos
        allTodos={props.allTodos}
        toggleTodo={props.toggleTodo}
        handleEdit={props.handleEdit}
        deleteTodo={props.deleteTodo}
        updateTask={props.updateTask}
      />
        <CompletedTodos
            allTodos={props.allTodos}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
        />
        <button onClick={props.addNewList} className='createList-btn' disabled={!props.title}>Create</button>
    </div>
  )
}

export default List;