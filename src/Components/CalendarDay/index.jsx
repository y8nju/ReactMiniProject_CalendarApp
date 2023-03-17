import { format } from "date-fns";
import { useEffect, useState } from "react";
import "./style.css";

export default function CalendarDay({ d, date, spcdeInfo }) {
    const [selected, setSelected] = useState(false);

    return(
        <div
            className={
            "calendarCell " +
            (new Date().toDateString() == new Date(d).toDateString() ? "today" : "") +
            (date.getMonth() == d.getMonth() ? "" : "inactive") +
            (selected ? "selected" : "")
            }
            onClick={() => setSelected(true)}
        >
            <p>{format(d, "d")}</p>
            {spcdeInfo?.map((spcde) => (
                spcde.locdate == format(new Date(d), "yyyyLLdd") ? <p className="spcde">{spcde.dateName}</p> : ''
            ))}
      </div>
    )
}