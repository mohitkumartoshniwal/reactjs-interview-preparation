import { useState } from "react";

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName("");
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <label htmlFor="task-input">Add Task: </label>
      <input
        // readOnly
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={onInputKeyDown}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
