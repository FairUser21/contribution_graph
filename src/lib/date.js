import dayjs from "dayjs";
import "dayjs/locale/ru";

export function getDates() {
  const dates = dayjs().locale("ru");
  const end = dates.endOf("month");
  const start = end.subtract(1, "year");

  const days = [];

  for (let i = 0; i < 365; i++) {
    days.push(start.add(i, "day"));
  }
  return days;
}
