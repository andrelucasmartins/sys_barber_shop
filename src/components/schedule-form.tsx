"use client"
// components/ScheduleForm.js
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { formatPhone } from "@/core/formatPhone";
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

  const { toast } = useToast();

  useEffect(() => {
    if (dateInitial) {
      setDate(dateInitial);
    }
  }, [dateInitial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, date, phone }),
        next: { tags: ["schedule"] },
      });

      toast({
        title: "Agendamento realizado com sucesso!",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: (
          <ToastAction altText="desmarcar agendamento">
            desmarcar agendamento
          </ToastAction>
        ),
      });

    } catch (error) {
      
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
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
              onChange={(e) => setPhone(formatPhone(e.target.value) || e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="px-4 py-2 "
          >
            Agendar
          </Button>
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
