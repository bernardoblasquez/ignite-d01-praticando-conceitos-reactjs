import id from "date-fns/esm/locale/id/index.js";
import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { EmptyList } from "./EmptyList";
import { ListIndicators } from "./ListIndicators";


interface Task {
   description: string,
   isDone: boolean
}
interface ToDoList{
   id: number,
   task: Task
}

interface ToDoListProps{
   listOfTasks: ToDoList[]
}



export function ToDoApp({listOfTasks}:ToDoListProps){

   console.log(listOfTasks)

   return(
      <>
         <Header />
         <ListIndicators />
         {/*<EmptyList />*/}
         <TaskList />
      </>
   )
}