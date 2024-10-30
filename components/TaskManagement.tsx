"use client";

import React, { useState } from "react";
import { Trash2, Edit, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finishing Wireframe", completed: false },
    { id: 2, title: "Meeting with team", completed: false },
    { id: 3, title: "Buy a cat food", completed: true },
    { id: 4, title: "Finishing daily commission", completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const toggleTaskCompletion = (taskId: Number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: Number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTaskItem = {
      id: tasks.length + 1,
      title: newTask.title,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask({
      title: "",
      date: "",
      description: "",
      startTime: "",
      endTime: "",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md py-4 flex-1">
      {/* Tasks Today Section */}
      <div className="my-4 h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Tasks Today</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3 py-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span
                className={`flex-1 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <Trash2 size={16} />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Add Task Button */}
        <div className="absolute bottom-[32px] inset-x-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Add Task Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleNewTaskSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Task title</label>
              <Input
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                placeholder="Enter task title"
                className="w-full mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Start Time</label>
                <Input
                  type="time"
                  value={newTask.startTime}
                  onChange={(e) =>
                    setNewTask({ ...newTask, startTime: e.target.value })
                  }
                  className="w-full mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">End Time</label>
                <Input
                  type="time"
                  value={newTask.endTime}
                  onChange={(e) =>
                    setNewTask({ ...newTask, endTime: e.target.value })
                  }
                  className="w-full mt-1"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Set Date</label>
              <Input
                type="date"
                value={newTask.date}
                onChange={(e) =>
                  setNewTask({ ...newTask, date: e.target.value })
                }
                className="w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Description</label>
              <textarea
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
                placeholder="Add Description"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create task
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskManagement;
