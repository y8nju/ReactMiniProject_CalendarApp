import CalendarDay from "../CalendarDay";
import "./style.css";

export default function CalendarWeek({ day, days, date, spcdeInfo }) {

  return (
    <tr key={day}>
      {days.map((d) => (
        <td key={d}>
          <CalendarDay d={d} date={date} spcdeInfo={spcdeInfo} />
        </td>
      ))}
    </tr>
  );
}
