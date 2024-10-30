import { Check, X } from "lucide-react";

interface WeeklyTaskSummaryProps {
  completedTasks: number;
  pendingTasks: number;
}

const WeeklyTaskSummary = ({
  completedTasks,
  pendingTasks,
}: WeeklyTaskSummaryProps) => {
  const totalTasks = completedTasks + pendingTasks;
  const progressPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6 w-[341px] mx-auto mt-8">
      {/* Task Summary Cards */}
      <div className="flex gap-4">
        {/* Completed Tasks Card */}
        <div className="flex-1 bg-blue-50 p-4">
          <div className="flex items-center gap-2 mb-2 text-xs">
            <div className="bg-blue-200 p-1 rounded">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-700 font-medium">Task Complete</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{completedTasks}</span>
            <span className="ml-2 text-gray-500">This Week</span>
          </div>
        </div>

        {/* Pending Tasks Card */}
        <div className="flex-1 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-2 text-xs">
            <div className="bg-red-200 p-1 rounded">
              <X className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-gray-700 font-medium">Task Pending</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{pendingTasks}</span>
            <span className="ml-2 text-gray-500">This Week</span>
          </div>
        </div>
      </div>

      {/* Weekly Progress Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Weekly Progress</h2>
        <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyTaskSummary;
