import { startOfMonth, endOfMonth, eachDayOfInterval, subMonths, addMonths } from 'date-fns';

export const getCurrentMonthDates = (date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachDayOfInterval({ start, end });
};

export const getAdjacentMonthDates = (date) => {
  const previousMonth = subMonths(date, 1);
  const nextMonth = addMonths(date, 1);

  const previousMonthDates = eachDayOfInterval({
    start: startOfMonth(previousMonth),
    end: endOfMonth(previousMonth),
  });

  const nextMonthDates = eachDayOfInterval({
    start: startOfMonth(nextMonth),
    end: endOfMonth(nextMonth),
  });

  return {
    previous: previousMonthDates,
    next: nextMonthDates,
  };
};
