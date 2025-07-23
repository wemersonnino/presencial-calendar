'use client';

import { Escala } from '@/schemas/escalas.schema';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Button } from '@headlessui/react';

interface CalendarProps {
  escalas: Escala[];
}

export const Calendar = ({ escalas }: CalendarProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-base font-semibold text-gray-900">
          {format(new Date(), 'MMMM yyyy', { locale: ptBR })}
        </h1>
        <div className="flex items-center gap-2">
          <Button className="text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <Button className="text-gray-500 hover:text-gray-700">
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-t text-xs font-medium text-gray-700">
        {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d) => (
          <div key={d} className="bg-gray-50 p-2 text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200 text-xs">
        {Array.from({ length: 42 }).map((_, i) => {
          const day = new Date();
          day.setDate(i + 1);

          const dayEscalas = escalas.filter(
            (escala) =>
              format(parseISO(escala.datetime), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'),
          );

          return (
            <div key={i} className="relative h-24 bg-white p-2">
              <time
                dateTime={format(day, 'yyyy-MM-dd')}
                className="block text-sm font-semibold text-gray-900"
              >
                {day.getDate()}
              </time>
              <ul className="mt-1 space-y-1">
                {dayEscalas.slice(0, 2).map((event) => (
                  <li key={event.id}>
                    <span className="block truncate text-gray-700">{event.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
