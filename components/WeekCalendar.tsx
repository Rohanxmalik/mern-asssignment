"use client";

import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

interface WeekCalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const WeekCalendar = ({
  initialDate = new Date(),
  onDateSelect,
}: WeekCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Get the start of the week (Monday)
  const getWeekStart = (date: Date) => {
    return startOfWeek(date, { weekStartsOn: 0 });
  };

  // Generate array of dates for the week
  const weekDates = Array.from({ length: 8 }, (_, i) => {
    return addDays(getWeekStart(initialDate), i);
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  return (
    <div className="flex space-x-1">
      {weekDates.map((date, index) => {
        const isSelected =
          selectedDate &&
          format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

        return (
          <div
            key={format(date, "yyyy-MM-dd")}
            className={`
              flex flex-col items-center p-2 rounded-lg cursor-pointer w-16
              transition-colors duration-200
              ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
            `}
            onClick={() => handleDateClick(date)}
          >
            <span
              className={`text-xs ${
                isSelected ? "text-white" : "text-gray-400"
              }`}
            >
              {format(date, "EEE")}
            </span>
            <span className={`text-xs mt-1 ${isSelected ? "text-white" : ""}`}>
              {format(date, "dd")}
            </span>
            {isSelected && (
              <div className="w-1 h-1 bg-white rounded-full mt-1" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
