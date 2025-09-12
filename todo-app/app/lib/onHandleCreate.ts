import { List, Todo } from "@/types"
import React, { FormEvent, SetStateAction } from "react"
import { v4 } from "uuid"
import { myAction } from "../reducers/listReducer"

export function onHandleCreateTask(e:FormEvent<HTMLFormElement>,addList:(list:List)=>void) {
    
    e.preventDefault()

    const formData= new FormData(e.currentTarget)
    const title= formData.get('Title') as string
    const content=formData.get('Content')     as string
    
    const list:List={
        id:v4(),
        title,
    }
   addList(list)
}