import { List } from "@/types"
import { useReducer } from "react"

interface addListAction{
 type: 'Add'
 list: List
}
interface removeListAction{
    type:'Delete',
    listid: string
}
interface updateListAction{
    type: "Update",
    updateList:List,
}
export type myState={
    lists:List[]
}
export type myAction=updateListAction|removeListAction|addListAction
export function reducer(state:myState,action:myAction){

    switch (action.type){
        case 'Add':{
            return {...state,lists:[...state.lists,action.list]}
        }
        case 'Delete':{
            const copyState= [...state.lists]
            const newState= copyState.filter((list)=>list.id!==action.listid)
            return {...state,lists:newState}
        }
       
    case 'Update':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.updateList.id
            ? { ...list, ...action.updateList }
            : list
        )
      }
    }
}
    export function useReducerList(){
         const initialstate={lists:[]}
          const [state,dispatch]=useReducer(reducer,initialstate)
           const addList =(list:List)=>dispatch({type:'Add',list})
           const removeList=(listId:string)=>dispatch({type:'Delete',listid:listId})
           const updateList=(list:List)=>dispatch({type:'Update',updateList:list})
           return {addList,removeList,updateList,state}
}