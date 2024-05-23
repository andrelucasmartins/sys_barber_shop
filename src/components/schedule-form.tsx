"use client"
// components/ScheduleForm.js
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { LuCalendar } from 'react-icons/lu';
import { Input } from "./ui/input";

interface ScheduleFormProps  {
  dateInitial?: Date
}

const ScheduleForm = ({ dateInitial }: ScheduleFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
   const [date, setDate] = useState<Date | undefined >(new Date());
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (dateInitial) {
      setDate(dateInitial);
    }
  }, [dateInitial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, date, phone }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div>
            <label className="block">Nome</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block">E-mail</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="john@email.com"
              required
            />
          </div>

          <div>
            <label className="block">Telefone</label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Schedule
          </button>
        </div>
        <div>
          <label className="inline-flex items-center gap-2 mx-auto">
            {" "}
            <LuCalendar /> Agenda
          </label>
          <Calendar
            mode="single"
            locale={ptBR}          
            selected={date}
            onSelect={setDate}
            className={`rounded-md border`}
            disabled={(date) =>
              date < new Date() || date < new Date(`${dateInitial}`)
            }
            initialFocus
          />
        </div>
      </div>
    </form>
  );
};

export default ScheduleForm;
