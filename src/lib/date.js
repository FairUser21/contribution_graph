import dayjs from "dayjs";
import "dayjs/locale/ru";

export const getDates = () => {
  const dates = dayjs().locale("ru");
  const end = dates.endOf("week");
  const start = end.subtract(357, "day");

  const days = [];

  for (let i = 8; i < 358; i++) {
    days.push(start.add(i, "day"));
  }
  console.log(days);

  return days;
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
