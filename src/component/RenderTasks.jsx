import { useState } from "react";
import Task from "./Task";
export default function RenderTasks({ data }) {
  const [all, setAll] = useState(data);
  return (
    <div className="flex flex-col gap-y-5">
      {data.map((item) => (
        <Task
          data={item}
          allData={data}
          key={item.id}
          onChangeData={(i) => setAll(i)}
        />
      ))}
    </div>
  );
}
