import React, { useState } from "react";
import { Task, Priority } from "../types";
import { X } from "lucide-react";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, "id" | "createdAt">) => void;
  initialTask?: Task;
}

const AddTaskModal = ({
  isOpen,
  onClose,
  onSave,
  initialTask,
}: AddTaskModalProps) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(
    initialTask?.description || ""
  );
  const [dateTime, setDateTime] = useState(
    initialTask?.dateTime
      ? new Date(initialTask.dateTime).toISOString().slice(0, 16)
      : ""
  );
  const [priority, setPriority] = useState<Priority>(
    initialTask?.priority || "Medium"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      description,
      dateTime: new Date(dateTime),
      priority,
      isCompleted: initialTask?.isCompleted || false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">
            {initialTask ? "Edit Task" : "Add New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Task title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                placeholder="Add Description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Set Date
              </label>
              <input
                type="datetime-local"
                required
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {initialTask ? "Save Changes" : "Create task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
