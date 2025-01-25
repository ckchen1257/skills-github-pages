import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { getCurrentMonthDates, getAdjacentMonthDates } from '../utils/dateUtils';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentMonthDates = getCurrentMonthDates(currentDate);
    const adjacentMonthDates = getAdjacentMonthDates(currentDate);
    setDates([...adjacentMonthDates.previous, ...currentMonthDates, ...adjacentMonthDates.next]);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody dates={dates} />
    </div>
  );
};

export default Calendar;
