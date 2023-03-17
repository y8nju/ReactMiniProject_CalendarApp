import { format } from "date-fns";
import { ChevronLeftArrow, ChevronRightArrow } from "react-basicons";
import "./style.css";

export default function CalendarHeader({ date, onPrevMonth, onNextMonth }) {
  return (
    <div className="calendarHeader">
      <button className="prevBtn" onClick={onPrevMonth}>
        <ChevronLeftArrow size={16} />
      </button>
      <h3>{format(date, "MMMM yyyy")}</h3>
      <button className="nextBtn" onClick={onNextMonth}>
        <ChevronRightArrow size={16} />
      </button>
    </div>
  );
}
