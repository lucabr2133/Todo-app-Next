import { Todo } from "@/types";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Divider} from "@heroui/divider";
import { Button } from "@heroui/button";

export default function CardComponent({task}:{task:Todo}){
    return  <Card key={ task.id} className="w-[400px] h-[400px] m-4">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">{task.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{task.content}</p>
      </CardBody>
      <CardFooter>
        <Button className="mr-2" color="danger" variant="flat">Delete</Button>
        <Button color="primary" variant="flat">Update</Button>

      </CardFooter>
    </Card>
}