export const getToday = () => {
  const today = new Date();
  return {
    today: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    date: today.setDate(today.getDate()),
  };
};

export const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return {
    tomorrow: tomorrow.getDate(),
    month: tomorrow.getMonth(),
    year: tomorrow.getFullYear(),
    date: tomorrow.setDate(tomorrow.getDate() + 1),
  };
};

export const getNextWeek = () => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  return {
    tomorrow: nextWeek.getDate(),
    month: nextWeek.getMonth(),
    year: nextWeek.getFullYear(),
    date: nextWeek.setDate(nextWeek.getDate() + 1),
  };
};

/**
 * example: July of 2022 starts on a friday (index 5 of an array of week days)
 * @param month
 * @returns
 */
export const getStartDayOfTheWeekForSpecifiedMonth = (
  month: number,
  year: number
) => {
  const date = new Date(year, month, 0);
  return new Date(date.getFullYear(), month).getDay();
};

/**
 * example: July of 2022 starts on a friday (index 5 of an array of week days)
 * @param month
 * @returns
 */
export const getStartDayOfTheWeekForCurrentMonth = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, currentMonth, 0);
  return new Date(date.getFullYear(), date.getMonth()).getDay();
};

export const getTotalNumberOfDaysInSpecifiedMonth = (
  year: number,
  month: number
) => {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
};

export const getDayEntriesForSpecifiedWeekInAMonth = ({
  week,
  startDayOfTheWeekForCurrentMonth,
}: {
  week: number;
  startDayOfTheWeekForCurrentMonth: number;
}) => {};