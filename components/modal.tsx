
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";
import {  Input} from "@heroui/input";
import {Form} from '@heroui/form'
import { Button } from "@heroui/button";
import { FormEvent, SetStateAction } from "react";
import { List, ModalType, Task, Todo } from "@/types";
import { myAction } from "@/app/reducers/listReducer";
import { onHandleCreateTaskList } from "@/app/lib/onHandleCreateListTask";

export default function ModalComponent({modalType,isOpen,onOpenChange,onHandleCreateTask,addList,addTask}:
  {modalType:ModalType,
    isOpen:boolean,onOpenChange:()=>void,
    onHandleCreateTask:(e:FormEvent<HTMLFormElement>,
      addList:(list:List)=>void)=>void,
      addList:(list:List)=>void,addTask:(task:Task)=>void}){
    return <Modal backdrop="blur" isOpen={isOpen} onOpenChange={(onOpenChange)}>
        {modalType=='createList'&& <ModalContent>
          {(onClose) => (
            <Form onSubmit={(e)=>{
              
                onHandleCreateTask(e,addList)
                onClose()

            }}>
              <ModalHeader className="flex flex-col gap-1">Create Task</ModalHeader>
              <ModalBody className="w-full">
                  <Input className="w-full"
                 name="Title"
                  label="Title"
                  placeholder="Enter Title"
                  variant="bordered"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  Create List
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>}
        {modalType=='createTask' &&  <ModalContent>
          {(onClose) => (
            <Form onSubmit={(e)=>{
              
                onHandleCreateTaskList(e,addTask)
                onClose()

            }}>
              <ModalHeader className="flex flex-col gap-1">Create Task</ModalHeader>
              <ModalBody className="w-full">
                  <Input className="w-full"
                 name="title"
                  label="Title"
                  placeholder="Enter Title"
                  variant="bordered"
                />
                  <Input className="w-full"
                 name="content"
                  label="Content"
                  placeholder="Enter Description"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="shadow" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  Create Task
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>}
       
      </Modal>
}