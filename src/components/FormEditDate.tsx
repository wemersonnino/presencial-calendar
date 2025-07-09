"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editDaySchema, EditDaySchema } from "@/schemas/editDaySchema";



export default function FormEditDate({ onSubmit }: { readonly onSubmit: (data: EditDaySchema) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<EditDaySchema>({
    resolver: zodResolver(editDaySchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="date" {...register("date")} className="border rounded p-2 w-full" />
      {errors.date && <p className="text-red-500">{errors.date.message}</p>}

      <textarea {...register("reason")} placeholder="Motivo" className="border rounded p-2 w-full" />
      {errors.reason && <p className="text-red-500">{errors.reason.message}</p>}

      <button type="submit" className="bg-indigo-600 text-white p-2 rounded">Salvar</button>
    </form>
  );
}
