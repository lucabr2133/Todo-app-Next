import { List, Todo } from "@/types"
import React, { FormEvent, SetStateAction } from "react"
import { v4 } from "uuid"
import { myAction } from "../reducers/listReducer"

export function onHandleUpdateTask(e:FormEvent<HTMLFormElement>,updateListA:(list:List)=>void,list:List) {
    
    e.preventDefault()

    const formData= new FormData(e.currentTarget)
    const title= formData.get('title') as string
    
    const updateList={
        ...list,
        title
    }
    console.log(updateList);
    
    
   updateListA(updateList)
}