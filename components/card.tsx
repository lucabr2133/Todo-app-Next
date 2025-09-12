import { List, ModalType, Task, Todo } from "@/types";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Divider} from "@heroui/divider";
import { Button } from "@heroui/button";
import { myAction } from "@/app/reducers/listReducer";
import { onHandleUpdateTask } from "@/app/lib/onHandleUpdateTask";
import ModalComponentUpdate from "./modalUpdate";
import React, { SetStateAction, useState } from "react";
import { myState, useTaskReducer } from "@/app/reducers/taskReducer";
import {Accordion,AccordionItem} from "@heroui/accordion"
import ModalComponentUpdateTask from "./modalUpdateTask";
import { updateTask } from "@/app/lib/onHandleUptateTasks";
import {Checkbox} from '@heroui/checkbox'
export default function CardComponent({modalType,addTask,removeTask,setModalType,onOpen,open,setOpen,list,removeList,updateList,state,updateTaskAction}:
  
  {onOpen:()=>void,
    updateTaskAction:(task:Task)=>void,
    removeTask:(taskId:string)=>void,
    addTask:(task:Task)=>void
    state:myState
    modalType:ModalType
    list:List,
    removeList:(listId:string)=>void,
    updateList:(list:List)=>void,
    open:string|null,
    setOpen:React.Dispatch<SetStateAction<string|null>>,
    setModalType:React.Dispatch<SetStateAction<ModalType>>
  }){
    const [activeTask,setActiveTask]=useState<Task|null>(null)
    return <>
    <div> 
  <Card  isBlurred key={ list.id} className="shadow-blue-900 shadow-2x2 border-1 w-[400px] h-[400px]  m-4">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">{list.title}</p>
        </div>
        <Button  onPress={ ()=>{
          setOpen(list.id)
        } } className="mr-2" color="secondary" variant="flat">Update</Button>

      </CardHeader>
      <Divider />
      <CardBody>
        
 <Accordion>
  {state.tasks.map(task => (
      <AccordionItem
  key={task.id}
  aria-label={`Task ${task.title}`}
  title={
    <div className="flex justify-between items-center w-full">
      <span>
        <Checkbox className="mr-3"></Checkbox>

        {task.title}
        </span>
      <div className="flex gap-2">
        <Button as={"span"}
          isIconOnly
          onPress={() => removeTask(task.id)}
          color="danger"
          variant="bordered"
        >
          X
        </Button>
        <Button as="span"
          onPress={() => setActiveTask(task)}
          color="default"
          variant="bordered"
        >
          editar
        </Button>
      </div>
    </div>
  }
>
  {task.description}
</AccordionItem>


  ))}
</Accordion>

      </CardBody>
      <CardFooter className="flex justify-center">
        <Button onPress={(e=>{
          removeList(list.id)
        })} className="mr-2" color="danger" variant="flat">Delete</Button>
        <Button onPress={()=>{
          setModalType('createTask')
          onOpen()
        }} color="primary" variant="flat" className="flex-1/2">Add task</Button>

      </CardFooter>
    </Card>
    </div>
  
 {open===list.id && <ModalComponentUpdate setOpen={setOpen} updateList={updateList} list={list}></ModalComponentUpdate>}
{activeTask &&<ModalComponentUpdateTask setOpenTask={setActiveTask} task={activeTask} updateTaskAction={updateTaskAction}></ModalComponentUpdateTask>}
 
      
    </>  
}