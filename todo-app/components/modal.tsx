
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";
import {  Input} from "@heroui/input";
import {Form} from '@heroui/form'
import { Button } from "@heroui/button";
import { FormEvent, SetStateAction } from "react";
import { Todo } from "@/types";

export default function ModalComponent({isOpen,onOpenChange,onHandleCreateTask,setTaskList}:{isOpen:boolean,setTaskList:React.Dispatch<SetStateAction<Todo[]>>,onOpenChange:()=>void,onHandleCreateTask:(e:FormEvent<HTMLFormElement>)=>void}){
    return <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <Form onSubmit={(e)=>{
                onHandleCreateTask(e,setTaskList)
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
                <Input
                name="Content"
                  label="Content"
                  placeholder="Content"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  Create Task
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>
      </Modal>
}