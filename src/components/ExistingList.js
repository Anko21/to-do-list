import React from 'react'
import EditList from './EditList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import ReadOnlyList from './ReadOnlyList';


const ExistingList = (props) => {


  return (
    <div className='box'>
      <FontAwesomeIcon
        icon={faThumbTack}
        className='pin'
        ize="xl"
      />
      {!props.editMode ?
        <ReadOnlyList
        allTodos={props.allTodos}
        title={props.title}
        setEditMode={props.setEditMode}
        />
        :
        <EditList
        allTodos={props.allTodos}
        title={props.title}
        updateList={props.updateList}
        id={props.id}
        setTableId={props.setTableId}
        setEditMode={props.setEditMode}
        />
      }
    </div>
  )
}

export default ExistingList;