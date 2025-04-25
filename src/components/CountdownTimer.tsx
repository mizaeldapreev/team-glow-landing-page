
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer = ({ className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 2 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-landing-green">{formatTimeUnit(timeLeft.days)}</div>
        <div className="text-xs uppercase text-white/70">Dias</div>
      </div>
      <div className="text-2xl text-landing-green font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-landing-green">{formatTimeUnit(timeLeft.hours)}</div>
        <div className="text-xs uppercase text-white/70">Horas</div>
      </div>
      <div className="text-2xl text-landing-green font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-landing-green">{formatTimeUnit(timeLeft.minutes)}</div>
        <div className="text-xs uppercase text-white/70">Min</div>
      </div>
      <div className="text-2xl text-landing-green font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-landing-green">{formatTimeUnit(timeLeft.seconds)}</div>
        <div className="text-xs uppercase text-white/70">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
