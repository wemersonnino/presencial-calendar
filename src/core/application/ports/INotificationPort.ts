import { Notification } from "@/core/domain/entities/Notification";

export interface INotificationPort {
  getUserNotifications(userId: string): Promise<Notification[]>;
  markAsRead(notificationId: string): Promise<void>;
}
