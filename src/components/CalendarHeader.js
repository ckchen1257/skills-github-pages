import React from 'react';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <div className="calendar-header flex justify-between items-center mb-4">
      <button onClick={onPrevMonth} className="text-blue-500">&lt;</button>
      <div className="text-lg font-bold">
        {currentMonth} {currentYear}
      </div>
      <button onClick={onNextMonth} className="text-blue-500">&gt;</button>
    </div>
  );
};

export default CalendarHeader;
