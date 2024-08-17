import { useState } from "react";
import { Task } from "./types";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskListItem from "./TaskListItem";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  return (
    <main>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </main>
  );
}
