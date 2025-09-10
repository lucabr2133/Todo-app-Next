"use client"
import NavbarComponent from "@/components/navbar";
import { Todo } from "@/types";
import { FormEvent, useState } from "react";

import {useDisclosure} from "@heroui/use-disclosure";


import {v4} from 'uuid'
import CardComponent from "@/components/card";
import ModalComponent from "@/components/modal";
import { onHandleCreateTask } from "./lib/onHandleCreate";
export default  function Page(){
  const {isOpen,onOpenChange,onOpen} =useDisclosure()
 const [TaskList,setTaskList]=useState<Todo[]>([])

    return (<>
    <NavbarComponent open={onOpen} ></NavbarComponent>
        <main className=" flex  container items-center h-auto justify-center mx-auto flex-grow">
    <ModalComponent setTaskList={setTaskList} isOpen={isOpen} onOpenChange={onOpenChange} onHandleCreateTask={onHandleCreateTask}></ModalComponent>
         
      {TaskList.map((task)=>(
       <CardComponent task={task}></CardComponent>
      ))}
            </main>
    </>)
}   