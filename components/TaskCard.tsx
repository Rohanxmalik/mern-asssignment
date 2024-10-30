import React from "react";
import { Task } from "../types";
import { Trash2, Edit } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, isCompleted: boolean) => void;
}

const TaskCard = ({
  task,
  onDelete,
  onEdit,
  onStatusChange,
}: TaskCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onStatusChange(task.id, !task.isCompleted)}
          className="w-5 h-5 rounded-sm border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <div
          className={`${task.isCompleted ? "line-through text-gray-400" : ""}`}
        >
          <h3 className="text-sm font-medium">{task.title}</h3>
          {task.description && (
            <p className="text-xs text-gray-500">{task.description}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-gray-400 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
