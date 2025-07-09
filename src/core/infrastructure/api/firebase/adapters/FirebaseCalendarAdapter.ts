import { ICalendarPort } from "@/core/application/ports/ICalendarPort";
import { CalendarDay } from "@/core/domain/entities/CalendarDay";
import { db } from "@/lib/firebase";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

export class FirebaseCalendarAdapter implements ICalendarPort {
  async updateDay(day: CalendarDay): Promise<void> {
    await setDoc(doc(db, "calendar", day.date), day);
  }

  async getDays(): Promise<CalendarDay[]> {
    const snapshot = await getDocs(collection(db, "calendar"));
    return snapshot.docs.map((doc) => doc.data() as CalendarDay);
  }
}
