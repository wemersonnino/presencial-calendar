import { ICalendarPort } from "../ports/ICalendarPort";
import { CalendarDay } from "@/core/domain/entities/CalendarDay";

export class CalendarService {
  constructor(private readonly calendarPort: ICalendarPort) {}

  async updateCalendarDay(day: CalendarDay) {
    return this.calendarPort.updateDay(day);
  }

  async getAllCalendarDays() {
    return this.calendarPort.getDays();
  }
}
