import { Task } from "@/types"
import { useReducer } from "react"

    interface addListAction{
    type: 'Add'
    task: Task
    }
    interface removeListAction{
        type:'Delete'
        taskid: string
    }
    interface updateListAction{
        type: "Update"
        updateTask:Task
    }
    export type myState={
        tasks:Task[]
    }
    export type myAction=addListAction|removeListAction|updateListAction
    export function taskReducer(state:myState,action:myAction):myState{
    switch (action.type){
        case 'Add':
            return {
                ...state,
                tasks:[...state.tasks,action.task]
            }
        case 'Update':
            return {
                ...state,
                tasks:state.tasks.map(task=>{
                    if( task.id==action.updateTask.id){
                        return {...task,title:action.updateTask.title,description:action.updateTask.description,checked:action.updateTask.checked}
                    }
                    return task
                })
            }
            case "Delete":
                return{
                    ...state,
                    tasks:state.tasks.filter(task=>task.id!==action.taskid)
                }
    }



}
export function useTaskReducer(){
    const initialstate:myState= {
        tasks:[]
    }
    const [state,dispatch]=useReducer(taskReducer,initialstate)
       const addTask =(task:Task)=>dispatch({type:'Add',task})
               const removeTask=(taskId:string)=>dispatch({type:'Delete',taskid:taskId})
               const updateTask=(task:Task)=>dispatch({type:'Update',updateTask:task})
               return {addTask,removeTask,updateTask,state}
}
