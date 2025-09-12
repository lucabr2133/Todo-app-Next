"use client"
import NavbarComponent from "@/components/navbar";
import {  useState } from "react";

import {useDisclosure} from "@heroui/use-disclosure";



import {v4} from 'uuid'
import CardComponent from "@/components/card";
import ModalComponent from "@/components/modal";
import { onHandleCreateTask } from "./lib/onHandleCreate";
import { reducer, useReducerList } from "./reducers/listReducer";
import ModalComponentUpdate from "@/components/modalUpdate";
import { ModalType } from "@/types";
import { useTaskReducer } from "./reducers/taskReducer";
export default  function Page(){
  const {isOpen,onOpenChange,onOpen} =useDisclosure()
const [openId,setOpenId]=useState<string|null>(null)
const [modalType,setModalType]=useState<ModalType>(null)
 const {addList,removeList,state,updateList} =useReducerList()
    const{addTask,removeTask,state:taskState,updateTask}=useTaskReducer()
  
    return (<>
    <NavbarComponent setModalType={setModalType} open={onOpen} ></NavbarComponent>
        <main className=" flex  container items-center h-auto justify-center mx-auto flex-grow">
    <ModalComponent addTask={addTask} modalType={modalType}  addList={addList} isOpen={isOpen} onOpenChange={onOpenChange} onHandleCreateTask={onHandleCreateTask}></ModalComponent>
      {state.lists.map((list)=>(
       <CardComponent updateTaskAction={updateTask} modalType={modalType} removeTask={removeTask} addTask={addTask} state={taskState} setModalType={setModalType} onOpen={onOpen} removeList={removeList} updateList={updateList}   open={openId} setOpen={setOpenId} key={list.id}   list={list}></CardComponent>
      ))}
            </main>
    </>)
}   