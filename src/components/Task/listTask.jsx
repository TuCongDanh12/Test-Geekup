import React, { useState, useEffect } from "react";
import { Flex } from "antd";
import { useAuth } from "../../hooks";
import { taskservice } from "../../services/task.service";
import SingleTask from "./singleTask";
function ListTask() {
  const [listTask, setListTask] = useState([]);
  const { userId } = useAuth();
  const [doneCount, setDoneCount] = useState(0);
  const getListTask = async () => {
    try {
      const res = await taskservice.getUserTask(userId);
      if (res.data) {
        setListTask(res.data.sort((a, b) => (a.completed === false ? -1 : 1)));
        // console.log(listTask);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getListTask();
  }, [userId]);

  useEffect(() => {
    // Tính toán số lượng task đã done
    const count = listTask.filter((task) => task.completed).length;
    setDoneCount(count);
  }, [listTask]);
  return (
    <div>
      <div className=" bg-slate-200 opacity-90 rounded border border-gray-400 shadow-lg max-h-[500px] overflow-y-auto p-3 mt-5">
        <Flex vertical gap={15}>
          {listTask.map((task, index) => (
            <SingleTask
              key={index}
              completed={task.completed}
              title={task.title}
              id={task.id}
              setListTask={setListTask}
            />
          ))}
        </Flex>
      </div>
      <span>Done {doneCount}/</span>
      <span>{listTask.length} Tasks</span>
    </div>
  );
}

export default ListTask;
