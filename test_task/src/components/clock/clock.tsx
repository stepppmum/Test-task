import { FC, useState, useEffect } from "react";
import cn from "classnames";
import './clock.styles.sass'

interface ClockProps {
  className?: string;
}

export const Clock: FC<ClockProps> = ({ className }) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setNow(new Date());
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = now.toLocaleDateString("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const formattedTime = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className={cn("clock", className)}>
            <p>Сегодня, {formattedDate}</p>
            <p>{formattedTime}</p>
        </div>
    );
    };
