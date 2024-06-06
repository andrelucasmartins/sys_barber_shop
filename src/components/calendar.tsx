"use client";

import { formatDate } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import React, { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/button";

interface CalendarProps {
  initialYear: number;
  initialMonth: number;
}

const getWeekendDates = (
  year: number,
  month: number,
  startDay: number
): Date[] => {
  const weekends: Date[] = [];
  const date = new Date(year, month - 1, startDay);
  const endDay = startDay + 6;

  for (let day = startDay; day <= endDay; day++) {
    date.setDate(day);
    if (
      date.getMonth() === month - 1 &&
      (date.getDay() === 0 || date.getDay() === 6)
    ) {
      weekends.push(new Date(date));
    }
  }

  return weekends;
};


export const Calendar: React.FC<CalendarProps> = ({ initialYear, initialMonth }) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [startDay, setStartDay] = useState(1);
  const [weekendDates, setWeekendDates] = useState<Date[]>([]);

  useEffect(() => {
    setWeekendDates(getWeekendDates(year, month, startDay));
  }, [year, month, startDay]);

  const handlePreviousWeek = () => {
    setStartDay((prev) => {
      const newStartDay = prev - 7;
      if (newStartDay < 1) {
        const newMonth = month === 1 ? 12 : month - 1;
        const newYear = month === 1 ? year - 1 : year;
        const daysInNewMonth = new Date(newYear, newMonth, 0).getDate();
        setMonth(newMonth);
        setYear(newYear);
        return daysInNewMonth + newStartDay;
      }
      return newStartDay;
    });
  };

  
  const handleNextWeek = () => {
    setStartDay((prev) => {
      const daysInMonth = new Date(year, month, 0).getDate();
      const newStartDay = prev + 7;
      if (newStartDay > daysInMonth) {
        const newMonth = month === 12 ? 1 : month + 1;
        const newYear = month === 12 ? year + 1 : year;
        setMonth(newMonth);
        setYear(newYear);
        return newStartDay - daysInMonth;
      }
      return newStartDay;
    });
  };

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={handlePreviousWeek}>
          <LuArrowLeft className="size-5" />
        </Button>{" "}
        <div>
          {formatDate(new Date(year, month - 1), "MMMM", { locale: ptBR })}{" "}
          {month}, {year}
        </div>
        <Button variant="ghost" onClick={handleNextWeek}>
          <LuArrowRight />
        </Button>
      </h2>
      <div className="flex  shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2 ">
        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Sun{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                11{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Mon{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                12{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Tue{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                13
              </p>
            </div>
          </div>
        </div>

        <div className="flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center">
          <span className="flex h-3 w-3 absolute -top-1 -right-1">
            <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-purple-900 text-sm"> Wed </p>
              <p className="text-purple-900  mt-3 font-bold"> 14 </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Thu{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                15{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Fri{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                16{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className=" group-hover:text-purple-900 text-sm transition-all	duration-300">
                {" "}
                Sat{" "}
              </p>
              <p className=" group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                {" "}
                17{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="list-disc pl-5">
        {weekendDates.map((date, index) => (
          <li key={index} className="mb-2 flex flex-row gap-4">
            <div className="flex flex-col">
              <span>
                {formatDate(date.getUTCDate(), "dd", { locale: ptBR })}
              </span>
              <span>
                {formatDate(date.setDate(date.getDate() + 1), "iii", {
                  locale: ptBR,
                })}
              </span>
            </div>
          </li>
          //  <li key={index} className="mb-2">
          //   {date.toDateString()}
          // </li>
        ))}
      </ul> */}
    </div>
  );
};
