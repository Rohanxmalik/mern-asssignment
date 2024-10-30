import TaskManagement from "@/components/TaskManagement";
import WeekCalendar from "@/components/WeekCalendar";
import WeeklyTaskSummary from "@/components/WeeklyTaskSummary";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center w-[390px] h-[844px] bg-white absolute">
      <div className="flex flex-row justify-center items-center w-[339px] border rounded p-3 mt-[37px]">
        <input
          type="text"
          placeholder="Search for a task"
          className="w-full focus:border-none focus:outline-none"
        />
        <Search className="pl-1 cursor-pointer" />
      </div>
      <div className="w-[355px] mt-3 flex-1 flex flex-col">
        <WeekCalendar />
        <WeeklyTaskSummary completedTasks={12} pendingTasks={3} />
        <TaskManagement />
      </div>
    </div>
  );
};

export default Home;
