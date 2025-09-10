import { Todo } from "@/types"
import React, { FormEvent, SetStateAction } from "react"
import { v4 } from "uuid"

export function onHandleCreateTask(e:FormEvent<HTMLFormElement>,setTaskList:React.Dispatch<SetStateAction<Todo[]>>) {
    e.preventDefault()

    const formData= new FormData(e.currentTarget)
    const title= formData.get('Title') as string
    const content=formData.get('Content')     as string
    
    const task:Todo={
        id:v4(),
        title,
        content
    }
    setTaskList((prev)=>{
        return [...prev,task]
    })
}