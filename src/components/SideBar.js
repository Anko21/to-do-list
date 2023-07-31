import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const SideBar = (props) => {

// onClick enters on an editMode and sets the Lists id the same with the tables

const handleClick=(id)=>{
    props.setTableId(id)
    props.setEditMode(prevMode=>!prevMode)
}

const clearList=()=>{
        props.setTableId('')
        props.setTitle('')
        props.setValue('')
        props.setAllTodos([])
}

  return (
    <div className='sidebar'>
        <div className='sidebar--title'>
            <h1>Your lists</h1>
            <button className='sidebar-createbtn' onClick={clearList}>+</button>
        </div>
        <div className='sidebar--Notes'>
            {props.allLists.map(allList=>{
                return (
                    <div key={allList.id}
                        className='sidebar--newNote'
                        onClick={()=>props.setTableId(allList.id)}
                        >
                        <h4 className='sidebar--titleList'>{allList.title}</h4>
                        <div className='sidebar-btn'>
                            <button className='btn btn-edit' onClick={()=>handleClick(allList.id)}>
                                <FontAwesomeIcon icon={faPencil} size="lg"/>
                            </button>
                            <button onClick={()=>props.deleteList(allList.id)} className='btn btn-danger'>
                                <FontAwesomeIcon icon={faTrashCan} size="lg" />
                            </button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SideBar