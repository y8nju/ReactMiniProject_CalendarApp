import { format } from "date-fns";
import "./style.css";

export default function CalendarDay({ day, days, date }) {
  return (
    <tr key={day}>
      {days.map((d) => (
        <td key={d}>
          <div
            className={
              "calendarCell " +
              (new Date().toDateString() == new Date(d).toDateString()
                ? "today"
                : "") +
              (date.getMonth() == d.getMonth() ? "" : "inactive")
            }
          >
            {format(d, "d")}
          </div>
        </td>
      ))}
    </tr>
  );
}
