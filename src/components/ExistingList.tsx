import EditList from './EditList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import ReadOnlyList from './ReadOnlyList';
import  {ExistingListProps} from './Interfaces'

const ExistingList = (props: ExistingListProps) => {


  return (
    <div className='box'>
      {/* <FontAwesomeIcon
        icon={faThumbTack}
        className='pin'
        size="xl"
      /> */}
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