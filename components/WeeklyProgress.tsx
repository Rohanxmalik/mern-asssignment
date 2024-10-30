import React from "react";
import { WeekSummary } from "../types";

interface WeeklyProgressProps {
  summary: WeekSummary;
}

const WeeklyProgress = ({ summary }: WeeklyProgressProps) => {
  const totalTasks = summary.completedTasks + summary.pendingTasks;
  const progressPercentage =
    totalTasks > 0 ? (summary.completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>
      <div className="relative h-2 bg-blue-100 rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="bg-blue-50 rounded-lg p-4 flex-1 mr-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-blue-500" />
            <span className="text-sm text-gray-600">Task Complete</span>
          </div>
          <p className="text-2xl font-semibold mt-2">
            {summary.completedTasks}
          </p>
          <p className="text-xs text-gray-500">This Week</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 flex-1 ml-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-red-500" />
            <span className="text-sm text-gray-600">Task Pending</span>
          </div>
          <p className="text-2xl font-semibold mt-2">{summary.pendingTasks}</p>
          <p className="text-xs text-gray-500">This Week</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgress;
