export default function Task({ data, allData, onChangeData }) {
  const { id, title, isDone } = data;
  function handelCheckClick() {
    // allData.map((item) => {
    //   let c = item.id === id && isDone == false;
    //   console.log(c);
    //   if (c === true) {
    //     item.isDone = true;
    //     console.log(item);
    //   } else if (c === false) {
    //     item.isDone = false;
    //     console.log(item);
    //   }
    // });
    // onChangeData(allData);
  }
  function handelDeleteClick() {
    allData = allData.filter((item) => item.id !== data.id);
    console.log(allData);
  }
  const style = "text-decoration: line-through;";
  return (
    <div className="flex gap-x-5">
      <div className="bg-white py-1 w-48 px-3">
        <p className={`${isDone ? "line-through" : ""}`}>{title}</p>
      </div>
      <button onClick={handelCheckClick}>✅</button>
      <button onClick={handelDeleteClick}>❌</button>
    </div>
  );
}
