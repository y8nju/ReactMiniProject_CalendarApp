import {
  endOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import CalendarWeek from "../CalendarWeek";
import "./style.css";

export default function CalendarTable({ date, spcdeInfo }) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    rows.push({ day, days });
    days = [];
  }
  console.log(rows);

  return (
    <table className="calendarTable">
      <thead>
        <tr>
          {WEEK_DAYS.map((day) => (
            <th>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* 전달, 다음달 체크하여 font color 체크 */}
        {rows?.map((row) => (
          <CalendarWeek
            day={row.day}
            date={date}
            days={row.days}
            monthStart={monthStart}
            spcdeInfo={spcdeInfo}
          />
        ))}
      </tbody>
    </table>
  );
}
