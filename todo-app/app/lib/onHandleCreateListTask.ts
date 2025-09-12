import { List, Task } from "@/types";
import React, { FormEvent } from "react";
import { v4 } from "uuid";
import { myAction } from "../reducers/taskReducer";

export function onHandleCreateTaskList(e:FormEvent<HTMLFormElement>,addTask:(task:Task)=>void){
    e.preventDefault()
    const formdata= new FormData(e.currentTarget)
    const title= formdata.get('title') as string
    const content= formdata.get('content') as string
    const task:Task={
        id:v4(),
        checked:false,
        description:content,
        title
    }
    addTask(task)



}