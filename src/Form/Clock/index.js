import { useEffect, useState } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setDate(new Date())
        }, 1000);

        return () => 
            clearInterval(intervalId)
        },
      []);

return (
    <div className="date">
        Dzisiaj jest {date.toLocaleString("pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })}
    </div>
);
};