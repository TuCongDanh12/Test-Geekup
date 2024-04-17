// SingleTask.js
import { useState } from "react";
import { Flex, Button, Spin } from "antd";
import { MinusSquareOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { taskservice } from "../../services/task.service";

function SingleTask({ completed, title, id, setListTask }) {
  const [loading, setLoading] = useState(false);

  const handleMarkDone = async () => {
    try {
      setLoading(true);
      const res = await taskservice.doneTask(id);
      if (res) {
        // Cập nhật trạng thái của task đó trong mảng listTask
        setListTask((prevListTask) =>
          prevListTask
            .map((task) =>
              task.id === id ? { ...task, completed: true } : task
            )
            .sort((a, b) => a.completed - b.completed)
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex justify="space-between">
      <Flex align="center" gap={10}>
        {completed === false ? (
          <MinusSquareOutlined className="text-red-500" />
        ) : (
          <CheckCircleOutlined className="text-green-500" />
        )}
        <p>{title}</p>
      </Flex>
      {completed === false && (
        <Button
          className="!w-[120px]"
          loading={loading}
          onClick={handleMarkDone}
          icon={loading ? <Spin /> : null}
        >
          Mark done
        </Button>
      )}
    </Flex>
  );
}

export default SingleTask;
