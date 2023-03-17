import { useState } from "react";
import CalendarHeader from "../CalendarHeader";
import CalendarTable from "../CalendarTable";
import "./style.css";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const handleOnPrevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth - 1, 1);
    setDate(newDate);
  };

  const handleOnNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth + 1, 1);
    setDate(newDate);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        date={date}
        onPrevMonth={handleOnPrevMonth}
        onNextMonth={handleOnNextMonth}
      />
      <CalendarTable date={date} />
    </div>
  );
}
