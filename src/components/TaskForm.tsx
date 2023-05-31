import { AiFillPlusCircle } from "react-icons/ai";
import { ChangeEvent, useState, useRef } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

interface inputTask {
  title: string;
  description: string;
}

type handleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function TaskForm({ addNewTask }: Props): React.JSX.Element {
  const initialState: inputTask = {
    title: "",
    description: "",
  };

  const [task, setTask] = useState<inputTask>(initialState);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: handleChange): void => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
    inputRef.current?.focus();
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.title}
          autoFocus
          required
          ref={inputRef}
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          rows={2}
          onChange={handleChange}
          value={task.description}
          required
        ></textarea>

        <button className="btn btn-primary">
          Save <AiFillPlusCircle />
        </button>
      </form>
    </div>
  );
}
