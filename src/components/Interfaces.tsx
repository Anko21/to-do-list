export interface TodosProps{
    task:string
    id:string
    edited:boolean,
    completed:boolean
  }
export interface ListsProps{
      title:string
      id:string
      allTodos:TodosProps[]
    }
export interface AddTodosProps{
    allTodos:TodosProps[]
    toggleTodo:(id:string,checked:boolean)=>void
    handleEdit:(id:string)=>void
    deleteTodo:(id:string)=>void
    updateTask:(updatedTodo:string, id:string)=>void
  }
  export interface CompletedProps{
    allTodos:TodosProps[]
    toggleTodo:(id:string, checked:boolean)=>void
    deleteTodo:(id:string)=>void
  }
  export interface ExistingListProps{
  allTodos:TodosProps[]
  allLists:ListsProps[]
  title:string
  id:string
  setTableId:React.Dispatch<React.SetStateAction<string>>
  updateList:(id:string,updatedTitle:string,updatedAllTodos:TodosProps[])=>void
  editMode:boolean
  setEditMode:React.Dispatch<React.SetStateAction<boolean>>
  toggleTodo:(id:string,checked:boolean)=>void
  handleEdit:(id:string)=>void
  deleteTodo:(id:string)=>void
}
  export interface EditListProps{
    allTodos:TodosProps[]
    title:string
    updateList:(id:string,updatedTitle:string,updatedAllTodos:TodosProps[])=>void
    id:string
    setTableId:React.Dispatch<React.SetStateAction<string>>
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
}
  export interface EditTodosProps{
    allTodo:TodosProps
    updateTask:(updatedTodo:string, id:string)=>void
    }
  export interface ListProps{
    allTodos:TodosProps[]
    toggleTodo:(id:string)=>void
    handleEdit:(id:string)=>void
    deleteTodo:(id:string)=>void
    updateTask:(updatedTodo:string, id:string)=>void
    addNewList:()=>void
    submitNewTodoItem:(e: React.FormEvent)=>void
    title:string
    setTitle:React.Dispatch<React.SetStateAction<string>>
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
}
  export interface ReadOnlyProps{
    allTodos:TodosProps[]
    title:string
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
  }
  export interface SideBarProps{
    allLists:ListsProps[]
    editMode:boolean
    setTableId:React.Dispatch<React.SetStateAction<string>>
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
    setTitle:React.Dispatch<React.SetStateAction<string>>
    setValue:React.Dispatch<React.SetStateAction<string>>
    setAllTodos:React.Dispatch<React.SetStateAction<TodosProps[]>>
    deleteList:(id:string)=> void
}
export interface QuoteIntroProps{
  handleClick:()=>void
}