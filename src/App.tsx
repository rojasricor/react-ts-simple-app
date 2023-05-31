import { useState } from "react";
import { Task } from "./interfaces/Task";
import logo from "./assets/vite.svg";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

export function App({ title }: Props): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn how to build a simple React app",
      completed: false,
    },
  ]);

  const addNewTask = (task: Task): void => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  };

  const deleteATask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar nabvar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React logo" />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
