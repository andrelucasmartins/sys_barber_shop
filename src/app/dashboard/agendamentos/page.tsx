'use client'
interface AgendamentosPageProps {}
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { add, format, getDay, parse, startOfWeek, toDate } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
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
export default function AgendamentosPage(props: AgendamentosPageProps) {
  return (
    <main>
      <h1>Agendamentos</h1>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "Event Test",
            start: toDate(new Date()),
            end: add(toDate(new Date()), { minutes: 30 }),
          }
        ]}
        defaultView="week"
        selectable
        popup
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </main>
  );
}
