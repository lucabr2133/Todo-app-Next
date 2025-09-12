import { Task } from "@/types";
import { FormEvent } from "react";

export function updateTask(e:FormEvent<HTMLFormElement>,originalTask:Task,updateTaskAction:(task:Task)=>void){
    const formdata= new FormData(e.currentTarget)
    const title= formdata.get('title') as string
    const description= formdata.get('content') as string
    const updateTask:Task={
        ...originalTask,
        description,
        title
    }
    updateTaskAction(updateTask)
    
    
}