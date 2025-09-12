import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { SetStateAction } from "react";
import { List } from "@/types";
import { onHandleUpdateTask } from "@/app/lib/onHandleUpdateTask";

export default function ModalComponentUpdate({
  updateList,
  setOpen,
  list,
}: {
  list: List;
  updateList:(list:List)=>void
  setOpen: React.Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <Modal
      backdrop="blur"
      isOpen={true}
      onOpenChange={(open) => {
        if (!open) setOpen(null);
      }}
    >
      <ModalContent>
        {(onClose) => (
          <Form
            onSubmit={(e) => {
              onHandleUpdateTask(e, updateList, list);
              onClose();
            }}
          >
            <ModalHeader className="flex flex-col gap-1">Update List</ModalHeader>
            <ModalBody className="w-full">
              <Input
                className="w-full"
                name="title"
                label="Title"
                placeholder="Enter Title"
                variant="bordered"
                defaultValue={list.title} // <-- opcional si quieres precargar el título
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  setOpen(null);
                }}
              >
                Close
              </Button>
              <Button type="submit" color="primary">
                Update List
              </Button>
            </ModalFooter>
          </Form>
        )}
      </ModalContent>
    </Modal>
  );
}
