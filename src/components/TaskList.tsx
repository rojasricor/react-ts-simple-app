import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}

export default function TaskList({
  tasks,
  deleteATask,
}: Props): React.JSX.Element {
  return (
    <>
      {tasks.map((task: Task, i: number) => (
        <div key={i} className="col-md-4 pb-2">
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
