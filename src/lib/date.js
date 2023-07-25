import dayjs from "dayjs";
import "dayjs/locale/ru";

export const getDates = () => {
  const dates = dayjs().locale("ru");
  const end = dates.endOf("day");
  console.log(end);
  const start = end.subtract(1, "year");

  const days = [];

  for (let i = 0; i < 365; i++) {
    days.push(start.add(i, "day"));
  }

  return days;
};

export const getWeeks = () => {
  const dates = dayjs().locale("ru");
  const end = dates.endOf("day");
  const start = end.subtract(1, "year");

  const weeks = [];

  for (let i = 0; i < 53; i++) {
    weeks.push(start.add(i, "week"));
  }
};

export const getMonths = () => {
  const dates = dayjs().locale("ru");
  const start = dates.subtract(11, "month");
  const months = [];

  for (let i = 0; i < 12; i++) {
    months.push(start.add(i, "month"));
  }
  return months;
};
