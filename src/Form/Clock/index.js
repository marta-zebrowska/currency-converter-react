import { useEffect, useState } from "react";
import "./style.css";

const formattedDate = (date) =>
  date.toLocaleString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="date">
    Dzisiaj jest
    {" "} 
    {formattedDate(date)}
    </div>;
};