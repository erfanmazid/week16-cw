import { useState } from "react";

export default function AddTask({ onAddTask, onChangeFilter }) {
  const [tasks, setTask] = useState("");
  function handelClick() {
    if (tasks == "") return;
    let newObj = { id: Date.now(), isDone: false, title: tasks };
    onAddTask((items) => [...items, newObj]);
    setTask("");
  }

  function handelChange(e) {
    onChangeFilter(e.target.value);
  }
  return (
    <div className="flex gap-x-5 items-center">
      <div className=" w-fit relative">
        <input
          className=" border-2 border-black p-1"
          type="text"
          placeholder="Add Todo Here ..."
          onChange={(e) => setTask(e.target.value)}
          value={tasks}
        />
        <button
          className="bg-orange-500 p-1 px-2 absolute right-[2px] top-[2px]"
          onClick={handelClick}
        >
          +
        </button>
      </div>
      <div>
        <select
          name="categories"
          className="p-[6px]"
          id=""
          onChange={handelChange}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
      </div>
    </div>
  );
}
