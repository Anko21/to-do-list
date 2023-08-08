import EditTodos from './EditTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import  {AddTodosProps} from './Interfaces'

//Ongoing tasks

function AddTodos (props:AddTodosProps){
    return(
    <div className='container-todos'>
        {props.allTodos.filter((allTodo)=>!allTodo.completed).length===0 &&
            (<p className='container-todos-p'>
                No tasks for today! Have fun !
            </p>)
        }
        <div className='todo-list'>
        {props.allTodos.map((allTodo)=>{
            return(
                <div className='list' key={allTodo.id}>
                    {!allTodo.edited?
                    (
                    <ul>
                        <li key={allTodo.id}>
                            {!allTodo.completed &&
                            (<label>
                                <div className='listlabel'>
                                    <div className='list-item'>
                                        <input
                                        type="checkbox"
                                        name="checkbox"
                                        checked={allTodo.completed}
                                        onChange={e=>{props.toggleTodo(allTodo.id,e.target.checked)}}
                                        />
                                        <p>{allTodo.task}</p>
                                    </div>
                                    <div className='btn-group'>
                                        <button className='btn btn-edit'
                                            onClick={()=>{props.handleEdit(allTodo.id)}}
                                            >
                                            <FontAwesomeIcon icon={faPencil} size="lg"/>
                                        </button><br/>
                                        <button className='btn btn-danger'
                                            onClick={()=>{props.deleteTodo(allTodo.id)}}
                                            >
                                            <FontAwesomeIcon icon={faTrashCan} size="lg"  />
                                        </button><br/>
                                    </div>
                                </div>
                            </label>
                            )
                            }

                        </li>
                     </ul>
                    ) :
                    <EditTodos
                    allTodo={allTodo}
                    updateTask={props.updateTask}
                    />
                    }
                 </div>
            )})}
        </div>
    </div>
    );
  }

export default AddTodos;