import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { SetStateAction } from "react";
import { List, Task } from "@/types";
import { updateTask } from "@/app/lib/onHandleUptateTasks";

export default function ModalComponentUpdateTask({
  setOpenTask,
  task,
  updateTaskAction
}: {
  task: Task|null;
  updateTaskAction:(task:Task)=>void
  setOpenTask: React.Dispatch<SetStateAction<Task | null>>;
}) {
  if (!task) return; 

  return (
    <Modal
      backdrop="blur"
      isOpen={true}
      onOpenChange={(open) => {
        if (!open) setOpenTask(null);
      }}
    >
      <ModalContent>
        {(onClose) => (
          <Form
            onSubmit={(e) => {
              updateTask(e, task,updateTaskAction );
              onClose();
            }}
          >
            <ModalHeader className="flex flex-col gap-1">Update Task</ModalHeader>
            <ModalBody className="w-full">
              <Input
                className="w-full"
                name="title"
                label="Title"
                placeholder="Enter Title"
                variant="bordered"
                defaultValue={task.title} // <-- opcional si quieres precargar el título
              />
                  <Input
                className="w-full"
                name="content"
                label="Title"
                placeholder="Enter Title"
                variant="bordered"
                defaultValue={task.description} // <-- opcional si quieres precargar el título
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  setOpenTask(null);
                }}
              >
                Close
              </Button>
              <Button type="submit" color="primary">
                Update Task
              </Button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
