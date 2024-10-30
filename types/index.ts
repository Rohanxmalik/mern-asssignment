export type Priority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description?: string;
  dateTime: Date;
  priority?: Priority;
  isCompleted: boolean;
  createdAt: Date;
}

export interface WeekSummary {
  completedTasks: number;
  pendingTasks: number;
  startDate: Date;
  endDate: Date;
}
