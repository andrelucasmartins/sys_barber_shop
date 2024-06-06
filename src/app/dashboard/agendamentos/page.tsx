'use client'
interface AgendamentosPageProps {}
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { format, getDay, parse, startOfWeek } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'pt-BR': ptBR
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EVENTS = [
  {
    title: "Event 1",
    start: new Date("2024-06-19T12:30:00.000Z"),
    end: new Date("2024-06-19T18:30:00.000Z"),
  },
  {
    title: "Event 2",
    start: new Date("2024-06-20T14:00:00.000Z"),
    end: new Date("2024-06-20T16:00:00.000Z"),
  },
  {
    title: "Event 3",
    start: new Date("2024-06-21T12:30:00.000Z"),
    end: new Date("2024-06-21T14:30:00.000Z"),
  },
  {
    title: "Event 4",
    start: new Date("2024-06-22T12:30:00.000Z"),
    end: new Date("2024-06-22T13:30:00.000Z"),
  },
  {
    title: "Event 5",
    start: new Date("2024-06-23T13:00:00.000Z"),
    end: new Date("2024-06-23T14:00:00.000Z"),
  },
  {
    title: "Event 6",
    start: new Date("2024-06-24T13:00:00.000Z"),
    end: new Date("2024-06-24T14:00:00.000Z"),
  },
  {
    title: "Event 7",
    start: new Date("2024-06-25T12:30:00.000Z"),
    end: new Date("2024-06-25T13:30:00.000Z"),
  },
  {
    title: "Event 8",
    start: new Date("2024-06-26T12:30:00.000Z"),
    end: new Date("2024-06-26T13:30:00.000Z"),
  },
  {
    title: "Event 9",
    start: new Date("2024-06-20T12:30:00.000Z"),
    end: new Date("2024-06-20T13:30:00.000Z"),
  },
  {
    title: "Event 10",
    start: new Date("2024-06-16T13:30:00.000Z"),
    end: new Date("2024-06-16T15:30:00.000Z"),
  },
  {
    title: "Event 11",
    start: new Date("2024-06-23T15:00:00.000Z"),
    end: new Date("2024-06-23T16:00:00.000Z"),
  },
  {
    title: "Event 12",
    start: new Date("2024-06-23T15:00:00.000Z"),
    end: new Date("2024-06-23T16:00:00.000Z"),
  },
  {
    title: "Event 13",
    start: new Date("2024-06-25T15:00:00.000Z"),
    end: new Date("2024-06-25T16:00:00.000Z"),
  },
  {
    title: "Event 14",
    start: new Date("2024-06-23T15:00:00.000Z"),
    end: new Date("2024-06-23T16:00:00.000Z"),
  },
  {
    title: "Event 15",
    start: new Date("2024-06-23T09:30:00.000Z"),
    end: new Date("2024-06-23T11:00:00.000Z"),
  },
  {
    title: "Event 16",
    start: new Date("2024-06-23T19:00:00.000Z"),
    end: new Date("2024-06-23T20:30:00.000Z"),
  },
];
export default function AgendamentosPage(props: AgendamentosPageProps) {
const [selectedDate, setSelectedDate] = useState(new Date());

const weekStart =
  selectedDate && selectedDate.getDay() !== 0
    ? new Date(
        selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay())
      )
    : selectedDate;

const weekDays = Array.from({ length: 7 }).map((_, i) =>
  new Date(weekStart).setDate(weekStart.getDate() + i)
);

const handleDayClick = (date: any) => {
  setSelectedDate(date);
};
  return (
    <main>
      <h1>Agendamentos</h1>
      <Calendar
        localizer={localizer}
        culture="pt-BR"
        events={EVENTS}
        defaultView="day"
        selectable
        popup
        style={{ height: 500 }}
      />
    </main>
  );
}
