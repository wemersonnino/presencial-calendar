import { CalendarDay } from "@/core/domain/entities/CalendarDay";

export interface ICalendarPort {
  updateDay(day: CalendarDay): Promise<void>;
  getDays(): Promise<CalendarDay[]>;
}
export interface ICalendarPortWithId extends ICalendarPort {
  getDayById(id: string): Promise<CalendarDay | null>;
  deleteDay(id: string): Promise<void>;
} 