import { useState } from "react";
import AddTask from "./AddTask";
import RenderTasks from "./RenderTasks";

export default function AllTasts() {
  let [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  function handelDelete(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  if (filter === "done") {
    tasks = tasks.filter((item) => item.isDone === true);
  } else if (filter === "undone") {
    tasks = tasks.filter((item) => item.isDone === false);
  }
  return (
    <div className="bg-blue-500 w-full h-screen flex flex-col items-center gap-y-3 pt-3">
      <h1 className="text-3xl text-white">Tasks</h1>
      <AddTask
        onAddTask={(item) => setTasks(item)}
        onChangeFilter={(i) => setFilter(i)}
      />
      <RenderTasks data={tasks} onDelete={handelDelete} />
    </div>
  );
}
