import React from 'react';

const CalendarBody = ({ dates }) => {
  const today = new Date().toDateString();

  return (
    <div className="calendar-body grid grid-cols-7 gap-2">
      {dates.map((date, index) => {
        const dateString = date.toDateString();
        const isToday = dateString === today;
        const isCurrentMonth = date.getMonth() === new Date().getMonth();
        const isAdjacentMonth = !isCurrentMonth;

        let dateClass = 'day ';
        if (isToday) {
          dateClass += 'bg-blue-500 text-black';
        } else if (isAdjacentMonth) {
          dateClass += 'text-gray-400';
        } else {
          dateClass += 'text-black';
        }

        return (
          <div key={index} className={dateClass}>
            {date.getDate()}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarBody;
