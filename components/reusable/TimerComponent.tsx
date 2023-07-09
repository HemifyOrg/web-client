import React, { useState, useEffect } from "react";

export const TimerComponent = ({
  duration,
  onUpdate,
  className,
}: {
  duration: number;
  onUpdate: (isEnded: boolean, timerText?: string) => void;
  className?: string;
}) => {
  const [seconds, setSeconds] = useState(duration);
  const [timerText, setTimerText] = useState(formatTime(duration));

  useEffect(() => {
    let interval: any = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;

          if (newSeconds === 0) {
            clearInterval(interval);
            onUpdate(true, formatTime(newSeconds));
          } else {
            onUpdate(false, formatTime(newSeconds));
          }

          const newTimerText = formatTime(newSeconds);
          setTimerText(newTimerText);

          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [duration, onUpdate, seconds]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }

  return <span className={className}>{timerText}</span>;
};

export default TimerComponent;
