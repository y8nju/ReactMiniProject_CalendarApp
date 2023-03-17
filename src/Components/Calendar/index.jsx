import { useEffect, useState } from "react";
import CalendarHeader from "../CalendarHeader";
import CalendarTable from "../CalendarTable";
import "./style.css";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [spcdeInfo, setSpcdeInfo] = useState([]);
  
  useEffect(() => {
      const serviceKey = process.env.REACT_APP_API_KEY;
      const endpoint = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=2023&numOfRows=17&_type=json&ServiceKey=${serviceKey}`;
      
      (async () => {
          try {
              const response = await fetch(endpoint);
              const json = await response.json();
              setSpcdeInfo(json.response.body.items.item)
          } catch(e) {
              console.log(e);
          }
      })();
      console.log('spcdeInfo', spcdeInfo);
  }, []);

  const handleOnPrevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };

  const handleOnNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        date={date}
        onPrevMonth={handleOnPrevMonth}
        onNextMonth={handleOnNextMonth}
      />
      <CalendarTable date={date} spcdeInfo={spcdeInfo}/>
    </div>
  );
}
