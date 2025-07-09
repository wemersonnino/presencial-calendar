export interface CalendarDay {
  date: string;
  responsibleUser: string;
  observation?: string;
  accepted: boolean;
  updatedBy: string;
}
export interface CalendarDayWithId extends CalendarDay {
  id: string;
}