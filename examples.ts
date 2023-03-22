const os = require("os");
const http = require("http");

import {
  getPrevioustWeekDateRange,
  getCurrentWeekDateRange,
  getCurrentMonthDateRage,
  getPreviousMonthDateRage,
  getPreviousMonthsDateRage,
} from ".";
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
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
export const getStartDayofTheWeekForMonth = (month?: number) => {
  if (month) {
    return new Date(date.getFullYear(), month).getDay();
  }
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

export const currentMonth = new Date().getMonth();
export const currentYear = new Date().getFullYear();
const currentDayOfCurrentMonth = new Date().getDate();
const date = new Date(currentYear, currentMonth + 1, 0);
const totalDaysInCurrentMonth = date.getDate();
const startDayOfTheWeekForCurrentMonth = new Date(
  date.getFullYear(),
  currentMonth
).getDay(); // What day of the week does the inputed month start at.

console.log("get today", getToday());
console.log("get tomorrow", getTomorrow());
console.log("get next week", getNextWeek());
// console.log("current Month", currentMonth); //  4
// console.log("current year", currentYear); // 2022
// console.log("day of the month", currentDayOfCurrentMonth); // 15
// console.log("date", date, date.getFullYear(), date.getMonth()); // 2022-05-30T23:00:00.000Z
// console.log("totalDaysInCurrentMonth", totalDaysInCurrentMonth); // 31
// console.log(
//   "startDayOfTheWeekForCurrentMonth",
//   startDayOfTheWeekForCurrentMonth
// ); // July of 2022 starts on a friday (index 5 of an array of week days)

// each month has 6 weeks entry. The month starts counting on the first week and may end in the last week.
// The first and last weeks are never full with days at the same time

const numberOfDaysEntryForEachWeekInAMonth = {
  0: {
    week: 0,
    dayEntries: [],
  },
  1: {
    week: 1,
    dayEntries: [],
  },
  2: {
    week: 2,
    dayEntries: [],
  },
  3: {
    week: 3,
    dayEntries: [],
  },
  4: {
    week: 4,
    dayEntries: [],
  },
  5: {
    week: 5,
    dayEntries: [],
  },
};

const dayEntriesForEachWeekOfTheMonth: {
  [x: string]: string[];
} = {};
let daysOftheMonth = 1;
// For each week in this month
for (let week = 0; week <= 5; week += 1) {
  dayEntriesForEachWeekOfTheMonth[week] = [];
  // for each day for a specific week in this month
  for (let day = 0; day <= 6; day += 1) {
    if (week === 0 && day < startDayOfTheWeekForCurrentMonth) {
      dayEntriesForEachWeekOfTheMonth[week].push("");
    } else if (week === 0 && day === startDayOfTheWeekForCurrentMonth) {
      dayEntriesForEachWeekOfTheMonth[week].push(`${daysOftheMonth}`);
      daysOftheMonth += 1;
    } else {
      if (daysOftheMonth > totalDaysInCurrentMonth) {
        dayEntriesForEachWeekOfTheMonth[week].push("");
      } else {
        dayEntriesForEachWeekOfTheMonth[week].push(`${daysOftheMonth}`);
      }
      daysOftheMonth += 1;
    }
  }
}

// console.log("calendar -->>", dayEntriesForEachWeekOfTheMonth);

const curr = new Date(); // get current date
const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
const last = first + 6; // last day is the first day + 6
console.log(
  "getdate, get day, first -->>",
  curr.getDate(),
  curr.getDay(),
  first
);
console.log("set date -ve", new Date(curr.setDate(-10)).toUTCString());
const firstday = new Date(curr.setDate(first)).toUTCString();
const lastday = new Date(curr.setDate(last)).toUTCString();

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 17);
// console.log("tomorrow -->>", tomorrow, tomorrow.getDate(), tomorrow.getMonth());
const THREAD_POOL_SIZE = os.cpus().length;
console.log("THREAD POOL SIZE -->>", THREAD_POOL_SIZE);
console.log("UV_THREADPOOL_SIZE", process.env.UV_THREADPOOL_SIZE);
console.log("first day", firstday);
console.log("last day", lastday);
console.log("getPrevioustWeekDateRange ---->>>", getPrevioustWeekDateRange());
console.log("getCurrentWeekDateRange -->>>", getCurrentWeekDateRange());
console.log("getCurrentMonthDateRage ---->>>>", getCurrentMonthDateRage());
console.log("get previous month date range -->>", getPreviousMonthDateRage());
console.log('getPreviousSixMonthDateRage', getPreviousMonthsDateRage())

// Each month has theoritical 35 days. But these days includes those from previous month and those from next month.
// Determine at what point of the 35 days does this current month start.
// Determine at what point of the 35 days does this current month end.
// Determine total number of days of the previous month

// https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f

http
  .createServer((req: any, res: any) => {
    console.log(req, res);
  })
  .listen(3000, () => {
    console.info(
      "\x1b[35m%s\x1b[0m",
      `The HTTP server is running on port ${3000}`
    );
  });
